const accounts = [
  { name: "Northstar Labs", plan: "Enterprise", channel: "Organic", mrr: 42800, users: 18420, conversion: 18.4, health: "Healthy" },
  { name: "Luma Retail", plan: "Growth", channel: "Paid Search", mrr: 22450, users: 9130, conversion: 13.8, health: "Watch" },
  { name: "Brightline AI", plan: "Enterprise", channel: "Lifecycle", mrr: 53120, users: 22180, conversion: 21.2, health: "Healthy" },
  { name: "Juniper Cloud", plan: "Scale", channel: "Partner", mrr: 31240, users: 12860, conversion: 16.1, health: "Healthy" },
  { name: "Atlas Finance", plan: "Enterprise", channel: "Paid Search", mrr: 48650, users: 20300, conversion: 15.7, health: "Watch" },
  { name: "Cobalt Studio", plan: "Starter", channel: "Organic", mrr: 7140, users: 3110, conversion: 9.4, health: "Healthy" },
  { name: "Orbit Supply", plan: "Growth", channel: "Lifecycle", mrr: 18490, users: 7410, conversion: 14.9, health: "Healthy" },
  { name: "Signal Works", plan: "Scale", channel: "Partner", mrr: 29780, users: 11620, conversion: 17.3, health: "Healthy" },
  { name: "Harbor Metrics", plan: "Growth", channel: "Organic", mrr: 19840, users: 8840, conversion: 12.7, health: "Watch" },
  { name: "Vertex Health", plan: "Enterprise", channel: "Lifecycle", mrr: 61200, users: 24250, conversion: 22.1, health: "Healthy" }
];

const trendData = {
  7: [
    { label: "Mon", revenue: 42, users: 12 },
    { label: "Tue", revenue: 45, users: 13 },
    { label: "Wed", revenue: 43, users: 13.6 },
    { label: "Thu", revenue: 49, users: 15 },
    { label: "Fri", revenue: 52, users: 16.2 },
    { label: "Sat", revenue: 50, users: 15.6 },
    { label: "Sun", revenue: 57, users: 17.4 }
  ],
  30: [
    { label: "Apr 12", revenue: 126, users: 41 },
    { label: "Apr 16", revenue: 139, users: 45 },
    { label: "Apr 20", revenue: 147, users: 47 },
    { label: "Apr 24", revenue: 144, users: 48 },
    { label: "Apr 28", revenue: 158, users: 52 },
    { label: "May 02", revenue: 171, users: 56 },
    { label: "May 06", revenue: 186, users: 59 },
    { label: "May 10", revenue: 194, users: 62 }
  ],
  90: [
    { label: "Feb", revenue: 322, users: 96 },
    { label: "Mar", revenue: 354, users: 108 },
    { label: "Apr", revenue: 401, users: 119 },
    { label: "May", revenue: 438, users: 128 }
  ]
};

const activity = [
  ["Northstar Labs crossed $40k MRR", "Organic · 2 minutes ago"],
  ["Lifecycle campaign recovered 184 trials", "Lifecycle · 6 minutes ago"],
  ["Paid search CPA decreased 9.6%", "Paid Search · 11 minutes ago"],
  ["Partner cohort activated 37 seats", "Partner · 17 minutes ago"]
];

const state = {
  dateRange: "30",
  channel: "all",
  query: "",
  chartMetric: "revenue",
  loading: true,
  hoverIndex: null
};

const elements = {
  dateFilter: document.querySelector("#dateFilter"),
  channelFilter: document.querySelector("#channelFilter"),
  searchInput: document.querySelector("#searchInput"),
  refreshButton: document.querySelector("#refreshButton"),
  exportButton: document.querySelector("#exportButton"),
  metricRevenue: document.querySelector("#metricRevenue"),
  metricUsers: document.querySelector("#metricUsers"),
  metricConversion: document.querySelector("#metricConversion"),
  metricIncidents: document.querySelector("#metricIncidents"),
  accountTable: document.querySelector("#accountTable"),
  emptyState: document.querySelector("#emptyState"),
  resultCount: document.querySelector("#resultCount"),
  activityFeed: document.querySelector("#activityFeed"),
  chart: document.querySelector("#trendChart"),
  tooltip: document.querySelector("#chartTooltip")
};

const ctx = elements.chart.getContext("2d");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function filteredAccounts() {
  const query = state.query.trim().toLowerCase();
  return accounts.filter((account) => {
    const channelMatches = state.channel === "all" || account.channel === state.channel;
    const queryMatches = !query || `${account.name} ${account.plan}`.toLowerCase().includes(query);
    return channelMatches && queryMatches;
  });
}

function dateMultiplier() {
  return Number(state.dateRange) / 30;
}

function calculateMetrics(rows) {
  const multiplier = dateMultiplier();
  const revenue = rows.reduce((sum, account) => sum + account.mrr, 0);
  const users = rows.reduce((sum, account) => sum + account.users, 0) * multiplier;
  const conversion = rows.length
    ? rows.reduce((sum, account) => sum + account.conversion, 0) / rows.length
    : 0;

  return {
    revenue,
    users,
    conversion,
    incidents: rows.filter((account) => account.health === "Watch").length
  };
}

function setLoading(isLoading) {
  state.loading = isLoading;
  document.querySelectorAll(".metric-value").forEach((node) => {
    node.classList.toggle("skeleton-block", isLoading);
  });
}

function renderMetrics(rows) {
  const metrics = calculateMetrics(rows);
  elements.metricRevenue.textContent = formatCurrency(metrics.revenue);
  elements.metricUsers.textContent = formatNumber(metrics.users);
  elements.metricConversion.textContent = `${metrics.conversion.toFixed(1)}%`;
  elements.metricIncidents.textContent = String(metrics.incidents);
}

function renderTable(rows) {
  elements.emptyState.hidden = rows.length > 0;
  elements.resultCount.textContent = `${rows.length} account${rows.length === 1 ? "" : "s"}`;

  if (!rows.length) {
    elements.accountTable.innerHTML = "";
    return;
  }

  elements.accountTable.innerHTML = rows.map((account) => `
    <tr>
      <td>
        <div class="account-cell">
          <span class="avatar">${account.name.slice(0, 1)}</span>
          <strong>${account.name}</strong>
        </div>
      </td>
      <td>${account.plan}</td>
      <td><span class="pill">${account.channel}</span></td>
      <td>${formatCurrency(account.mrr)}</td>
      <td>${formatNumber(account.users)}</td>
      <td><span class="pill ${account.health === "Healthy" ? "health-good" : "health-watch"}">${account.health}</span></td>
    </tr>
  `).join("");
}

function renderActivity(rows) {
  const visibleChannels = state.channel === "all"
    ? activity
    : activity.filter((item) => item[1].startsWith(state.channel));

  elements.activityFeed.innerHTML = visibleChannels.slice(0, Math.max(2, rows.length ? 4 : 0)).map((item) => `
    <div class="activity-item">
      <span aria-hidden="true"></span>
      <div>
        <strong>${item[0]}</strong>
        <small>${item[1]}</small>
      </div>
    </div>
  `).join("") || `
    <div class="empty-state">
      <strong>No live activity</strong>
      <span>This channel has no matching stream events right now.</span>
    </div>
  `;
}

function getChartPoints() {
  const base = trendData[state.dateRange];
  const factor = state.channel === "all" ? 1 : 0.72 + (state.channel.length % 5) * 0.06;
  return base.map((point) => ({
    ...point,
    revenue: Math.round(point.revenue * factor),
    users: Math.round(point.users * factor * 10) / 10
  }));
}

function drawChart() {
  const canvas = elements.chart;
  const pixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * pixelRatio;
  canvas.height = rect.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const points = getChartPoints();
  const values = points.map((point) => point[state.chartMetric]);
  const max = Math.max(...values) * 1.16;
  const min = Math.min(...values) * 0.82;
  const padding = { top: 30, right: 24, bottom: 48, left: 54 };
  const chartWidth = rect.width - padding.left - padding.right;
  const chartHeight = rect.height - padding.top - padding.bottom;

  const toX = (index) => padding.left + (chartWidth / (points.length - 1 || 1)) * index;
  const toY = (value) => padding.top + chartHeight - ((value - min) / (max - min || 1)) * chartHeight;

  ctx.strokeStyle = "#dce3ef";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#67728a";
  ctx.font = "12px Inter, sans-serif";

  for (let i = 0; i < 4; i += 1) {
    const y = padding.top + (chartHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(rect.width - padding.right, y);
    ctx.stroke();
  }

  points.forEach((point, index) => {
    const x = toX(index);
    ctx.fillText(point.label, Math.min(x - 18, rect.width - 70), rect.height - 18);
  });

  const gradient = ctx.createLinearGradient(0, padding.top, 0, rect.height - padding.bottom);
  gradient.addColorStop(0, "rgba(18, 104, 243, 0.25)");
  gradient.addColorStop(1, "rgba(18, 104, 243, 0)");

  ctx.beginPath();
  values.forEach((value, index) => {
    const x = toX(index);
    const y = toY(value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(toX(values.length - 1), rect.height - padding.bottom);
  ctx.lineTo(toX(0), rect.height - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  values.forEach((value, index) => {
    const x = toX(index);
    const y = toY(value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#1268f3";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  values.forEach((value, index) => {
    const isHovered = index === state.hoverIndex;
    ctx.beginPath();
    ctx.arc(toX(index), toY(value), isHovered ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = isHovered ? "#00a88f" : "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#1268f3";
    ctx.lineWidth = 3;
    ctx.stroke();
  });
}

function updateTooltip(event) {
  const points = getChartPoints();
  const rect = elements.chart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const index = Math.round((x / rect.width) * (points.length - 1));
  state.hoverIndex = Math.max(0, Math.min(points.length - 1, index));
  const point = points[state.hoverIndex];
  const value = point[state.chartMetric];
  elements.tooltip.hidden = false;
  elements.tooltip.style.left = `${Math.min(event.clientX - rect.left + 16, rect.width - 170)}px`;
  elements.tooltip.style.top = `${Math.max(event.clientY - rect.top - 20, 10)}px`;
  elements.tooltip.innerHTML = `<strong>${point.label}</strong><br>${state.chartMetric === "revenue" ? `$${value}k revenue` : `${value}k users`}`;
  drawChart();
}

function render() {
  const rows = filteredAccounts();
  renderMetrics(rows);
  renderTable(rows);
  renderActivity(rows);
  drawChart();
}

function simulateLoad() {
  setLoading(true);
  elements.resultCount.textContent = "Loading";
  window.setTimeout(() => {
    setLoading(false);
    render();
  }, 650);
}

function exportCsv() {
  const rows = filteredAccounts();
  const header = ["Account", "Plan", "Channel", "MRR", "Users", "Health"];
  const body = rows.map((row) => [row.name, row.plan, row.channel, row.mrr, row.users, row.health]);
  const csv = [header, ...body].map((line) => line.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pulseops-dashboard.csv";
  link.click();
  URL.revokeObjectURL(url);
}

elements.dateFilter.addEventListener("change", (event) => {
  state.dateRange = event.target.value;
  render();
});

elements.channelFilter.addEventListener("change", (event) => {
  state.channel = event.target.value;
  render();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

elements.refreshButton.addEventListener("click", simulateLoad);
elements.exportButton.addEventListener("click", exportCsv);

document.querySelectorAll("[data-chart-metric]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-chart-metric]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.chartMetric = button.dataset.chartMetric;
    drawChart();
  });
});

elements.chart.addEventListener("mousemove", updateTooltip);
elements.chart.addEventListener("mouseleave", () => {
  state.hoverIndex = null;
  elements.tooltip.hidden = true;
  drawChart();
});

window.addEventListener("resize", drawChart);
simulateLoad();
