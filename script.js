const accounts = [
  { name: "Northstar Labs", plan: "Enterprise", channel: "Organic", mrr: 42800, users: 18420, conversion: 18.4, health: "Healthy", owner: "Mina Chen", stage: "Expansion", nps: 62, risk: "Low", next: "Finalize security addendum" },
  { name: "Luma Retail", plan: "Growth", channel: "Paid Search", mrr: 22450, users: 9130, conversion: 13.8, health: "Watch", owner: "Kai Mori", stage: "Adoption", nps: 34, risk: "Medium", next: "Review onboarding drop-off" },
  { name: "Brightline AI", plan: "Enterprise", channel: "Lifecycle", mrr: 53120, users: 22180, conversion: 21.2, health: "Healthy", owner: "Sofia Lin", stage: "Renewal", nps: 71, risk: "Low", next: "Prepare renewal forecast" },
  { name: "Juniper Cloud", plan: "Scale", channel: "Partner", mrr: 31240, users: 12860, conversion: 16.1, health: "Healthy", owner: "Noah Park", stage: "Activation", nps: 55, risk: "Low", next: "Schedule partner QBR" },
  { name: "Atlas Finance", plan: "Enterprise", channel: "Paid Search", mrr: 48650, users: 20300, conversion: 15.7, health: "Watch", owner: "Rina Sato", stage: "Expansion", nps: 29, risk: "High", next: "Escalate SLA review" },
  { name: "Cobalt Studio", plan: "Starter", channel: "Organic", mrr: 7140, users: 3110, conversion: 9.4, health: "Healthy", owner: "Leo Wang", stage: "Activation", nps: 49, risk: "Low", next: "Send template library" },
  { name: "Orbit Supply", plan: "Growth", channel: "Lifecycle", mrr: 18490, users: 7410, conversion: 14.9, health: "Healthy", owner: "Mia Ito", stage: "Adoption", nps: 58, risk: "Low", next: "Expand lifecycle playbook" },
  { name: "Signal Works", plan: "Scale", channel: "Partner", mrr: 29780, users: 11620, conversion: 17.3, health: "Healthy", owner: "Aria Liu", stage: "Renewal", nps: 64, risk: "Low", next: "Confirm pricing tier" },
  { name: "Harbor Metrics", plan: "Growth", channel: "Organic", mrr: 19840, users: 8840, conversion: 12.7, health: "Watch", owner: "Ken Wu", stage: "Adoption", nps: 31, risk: "Medium", next: "Resolve data freshness issue" },
  { name: "Vertex Health", plan: "Enterprise", channel: "Lifecycle", mrr: 61200, users: 24250, conversion: 22.1, health: "Healthy", owner: "Aiko Tan", stage: "Expansion", nps: 76, risk: "Low", next: "Build executive success plan" }
];

const languageKey = "portfolio-language";

const translations = {
  zh: {
    "Primary navigation": "主要導覽",
    "PulseOps home": "PulseOps 首頁",
    "Realtime Analytics": "即時分析",
    "Dashboard sections": "儀表板區段",
    "Overview": "總覽",
    "Segments": "分群",
    "Events": "事件",
    "Health": "健康度",
    "Live stream": "即時串流",
    "Updated every few seconds": "每幾秒更新一次",
    "SaaS command center": "SaaS 指揮中心",
    "Realtime Dashboard": "即時儀表板",
    "Monitor acquisition, conversion, revenue, and incidents across live product channels.": "監控即時產品渠道中的獲客、轉換、營收與事件。",
    "Dashboard actions": "儀表板操作",
    "Language": "語言",
    "Refresh dashboard": "重新整理儀表板",
    "Export CSV": "匯出 CSV",
    "Dashboard filters": "儀表板篩選",
    "Saved view": "儲存檢視",
    "Executive pulse": "高層脈搏",
    "Growth review": "成長回顧",
    "Risk watchlist": "風險觀察清單",
    "Date range": "日期範圍",
    "Last 7 days": "最近 7 天",
    "Last 30 days": "最近 30 天",
    "Last 90 days": "最近 90 天",
    "Channel": "渠道",
    "All channels": "所有渠道",
    "Organic": "自然流量",
    "Paid Search": "付費搜尋",
    "Lifecycle": "生命週期",
    "Partner": "合作夥伴",
    "Search accounts": "搜尋帳戶",
    "Search by customer or plan": "依客戶或方案搜尋",
    "Key metrics": "關鍵指標",
    "Revenue": "營收",
    "Monthly recurring revenue": "月 recurring revenue",
    "Active users": "活躍使用者",
    "Unique users in selected window": "所選期間的不重複使用者",
    "Conversion": "轉換率",
    "Trial to paid conversion rate": "試用轉付費轉換率",
    "Incidents": "事件",
    "Customer-impacting alerts": "影響客戶的警示",
    "Revenue trend": "營收趨勢",
    "Hover or tap a point to inspect channel performance.": "滑過或點擊節點查看渠道表現。",
    "Chart metric": "圖表指標",
    "Users": "使用者",
    "Interactive trend chart": "互動趨勢圖",
    "Live activity": "即時活動",
    "Recent stream events": "近期串流事件",
    "Account performance": "帳戶表現",
    "Filtered customer accounts and health signals.": "篩選後的客戶帳戶與健康度訊號。",
    "Loading": "載入中",
    "Account": "帳戶",
    "Plan": "方案",
    "MRR": "MRR",
    "No accounts match the current filters.": "沒有帳戶符合目前篩選。",
    "Adjust the date range, channel, or search query to broaden the results.": "調整日期範圍、渠道或搜尋條件以擴大結果。",
    "Enterprise": "企業版",
    "Growth": "成長版",
    "Scale": "規模型",
    "Starter": "入門版",
    "Healthy": "健康",
    "Watch": "觀察",
    "No live activity": "沒有即時活動",
    "This channel has no matching stream events right now.": "此渠道目前沒有符合的串流事件。",
    "Dashboard insights": "儀表板洞察",
    "Segment pipeline": "分群 pipeline",
    "Mock cohort movement by lifecycle stage.": "依生命週期階段呈現的 mock cohort 移動。",
    "Revenue forecast": "營收預測",
    "Projected quarter close against target.": "季度預估收盤與目標比較。",
    "On track": "進度正常",
    "Needs attention": "需要注意",
    "Alert queue": "警示佇列",
    "Prioritized mock incidents for operator review.": "供操作人員審查的 mock 事件優先序。",
    "Account detail panel": "帳戶詳細面板",
    "Account detail": "帳戶詳細",
    "Close account detail": "關閉帳戶詳細",
    "Owner": "負責人",
    "Risk": "風險",
    "Low": "低",
    "Medium": "中",
    "High": "高",
    "Stage": "階段",
    "Activation": "啟用",
    "Adoption": "採用",
    "Expansion": "擴張",
    "Renewal": "續約",
    "Next action": "下一步",
    "Mock timeline": "Mock 時間線",
    "QBR prepared · Expansion signal detected · Health reviewed": "QBR 已準備 · 偵測到擴張訊號 · 健康度已審查",
    "account": "個帳戶",
    "accounts": "個帳戶",
    "revenue": "營收",
    "users": "使用者"
  },
  ja: {
    "Primary navigation": "メインナビゲーション",
    "PulseOps home": "PulseOps ホーム",
    "Realtime Analytics": "リアルタイム分析",
    "Dashboard sections": "ダッシュボードセクション",
    "Overview": "概要",
    "Segments": "セグメント",
    "Events": "イベント",
    "Health": "ヘルス",
    "Live stream": "ライブストリーム",
    "Updated every few seconds": "数秒ごとに更新",
    "SaaS command center": "SaaS コマンドセンター",
    "Realtime Dashboard": "リアルタイムダッシュボード",
    "Monitor acquisition, conversion, revenue, and incidents across live product channels.": "ライブのプロダクトチャネルにおける獲得、転換、売上、インシデントを監視します。",
    "Dashboard actions": "ダッシュボード操作",
    "Language": "言語",
    "Refresh dashboard": "ダッシュボードを更新",
    "Export CSV": "CSV を出力",
    "Dashboard filters": "ダッシュボードフィルター",
    "Saved view": "保存ビュー",
    "Executive pulse": "エグゼクティブパルス",
    "Growth review": "成長レビュー",
    "Risk watchlist": "リスクウォッチリスト",
    "Date range": "期間",
    "Last 7 days": "直近 7 日",
    "Last 30 days": "直近 30 日",
    "Last 90 days": "直近 90 日",
    "Channel": "チャネル",
    "All channels": "すべてのチャネル",
    "Organic": "オーガニック",
    "Paid Search": "有料検索",
    "Lifecycle": "ライフサイクル",
    "Partner": "パートナー",
    "Search accounts": "アカウント検索",
    "Search by customer or plan": "顧客名またはプランで検索",
    "Key metrics": "主要指標",
    "Revenue": "売上",
    "Monthly recurring revenue": "月間経常収益",
    "Active users": "アクティブユーザー",
    "Unique users in selected window": "選択期間のユニークユーザー",
    "Conversion": "コンバージョン",
    "Trial to paid conversion rate": "トライアルから有料への転換率",
    "Incidents": "インシデント",
    "Customer-impacting alerts": "顧客影響のあるアラート",
    "Revenue trend": "売上トレンド",
    "Hover or tap a point to inspect channel performance.": "ポイントにホバーまたはタップしてチャネル実績を確認します。",
    "Chart metric": "チャート指標",
    "Users": "ユーザー",
    "Interactive trend chart": "インタラクティブなトレンドチャート",
    "Live activity": "ライブアクティビティ",
    "Recent stream events": "最近のストリームイベント",
    "Account performance": "アカウント実績",
    "Filtered customer accounts and health signals.": "絞り込まれた顧客アカウントとヘルスシグナル。",
    "Loading": "読み込み中",
    "Account": "アカウント",
    "Plan": "プラン",
    "MRR": "MRR",
    "No accounts match the current filters.": "現在のフィルターに一致するアカウントはありません。",
    "Adjust the date range, channel, or search query to broaden the results.": "期間、チャネル、検索条件を調整して結果を広げてください。",
    "Enterprise": "エンタープライズ",
    "Growth": "グロース",
    "Scale": "スケール",
    "Starter": "スターター",
    "Healthy": "良好",
    "Watch": "要確認",
    "No live activity": "ライブアクティビティなし",
    "This channel has no matching stream events right now.": "このチャネルには現在一致するイベントがありません。",
    "Dashboard insights": "ダッシュボードインサイト",
    "Segment pipeline": "セグメントパイプライン",
    "Mock cohort movement by lifecycle stage.": "ライフサイクル段階別のモックコホート推移。",
    "Revenue forecast": "売上予測",
    "Projected quarter close against target.": "四半期着地予測と目標の比較。",
    "On track": "順調",
    "Needs attention": "注意が必要",
    "Alert queue": "アラートキュー",
    "Prioritized mock incidents for operator review.": "オペレーター確認用に優先付けされたモックインシデント。",
    "Account detail panel": "アカウント詳細パネル",
    "Account detail": "アカウント詳細",
    "Close account detail": "アカウント詳細を閉じる",
    "Owner": "担当者",
    "Risk": "リスク",
    "Low": "低",
    "Medium": "中",
    "High": "高",
    "Stage": "段階",
    "Activation": "アクティベーション",
    "Adoption": "定着",
    "Expansion": "拡大",
    "Renewal": "更新",
    "Next action": "次のアクション",
    "Mock timeline": "モックタイムライン",
    "QBR prepared · Expansion signal detected · Health reviewed": "QBR 準備済み · 拡大シグナル検出 · ヘルス確認済み",
    "account": "件",
    "accounts": "件",
    "revenue": "売上",
    "users": "ユーザー"
  }
};

const baseTextNodes = new WeakMap();
const translatableAttributes = ["aria-label", "title", "placeholder"];

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(languageKey) || "en";
  } catch {
    return "en";
  }
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem(languageKey, language);
  } catch {
    return;
  }
}

function translateValue(value, language = getStoredLanguage()) {
  const key = normalizeText(value);
  if (!key || language === "en") return key;
  return translations[language]?.[key] || key;
}

function translatePage(language = getStoredLanguage()) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : language;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest(".language-switcher") || ["SCRIPT", "STYLE"].includes(parent.tagName)) continue;
    const base = baseTextNodes.get(node) || normalizeText(node.nodeValue);
    if (!base) continue;
    baseTextNodes.set(node, base);
    node.nodeValue = translateValue(base, language);
  }

  document.querySelectorAll("*").forEach((element) => {
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const baseAttribute = `data-base-${attribute}`;
      const base = element.getAttribute(baseAttribute) || element.getAttribute(attribute);
      element.setAttribute(baseAttribute, base);
      element.setAttribute(attribute, translateValue(base, language));
    });
  });
}

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

const alerts = [
  { title: "Atlas Finance SLA review overdue", detail: "Enterprise account has two unresolved reliability notes.", severity: "critical" },
  { title: "Paid Search CPA above target", detail: "Acquisition cost is 14% above the executive pulse view.", severity: "warning" },
  { title: "Harbor Metrics data freshness", detail: "Warehouse sync is delayed by 22 minutes.", severity: "warning" }
];

const savedViews = {
  executive: { dateRange: "30", channel: "all", query: "", chartMetric: "revenue" },
  growth: { dateRange: "90", channel: "Lifecycle", query: "", chartMetric: "users" },
  risk: { dateRange: "30", channel: "all", query: "finance", chartMetric: "revenue" }
};

const state = {
  view: "executive",
  dateRange: "30",
  channel: "all",
  query: "",
  chartMetric: "revenue",
  loading: true,
  hoverIndex: null
};

const elements = {
  viewFilter: document.querySelector("#viewFilter"),
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
  tooltip: document.querySelector("#chartTooltip"),
  segmentStack: document.querySelector("#segmentStack"),
  forecastBadge: document.querySelector("#forecastBadge"),
  forecastValue: document.querySelector("#forecastValue"),
  forecastProgress: document.querySelector("#forecastProgress"),
  forecastCopy: document.querySelector("#forecastCopy"),
  alertList: document.querySelector("#alertList"),
  drawer: document.querySelector("#accountDrawer"),
  drawerScrim: document.querySelector("#drawerScrim"),
  closeDrawer: document.querySelector("#closeDrawer"),
  drawerTitle: document.querySelector("#drawerTitle"),
  drawerBody: document.querySelector("#drawerBody")
};

const ctx = elements.chart.getContext("2d");

function formatCurrency(value) {
  const language = getStoredLanguage();
  const locale = language === "ja" ? "ja-JP" : language === "zh" ? "zh-TW" : "en-US";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value).replace("$", locale === "en-US" ? "$" : "US$");
}

function formatNumber(value) {
  const language = getStoredLanguage();
  const locale = language === "ja" ? "ja-JP" : language === "zh" ? "zh-TW" : "en-US";
  return new Intl.NumberFormat(locale).format(Math.round(value));
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
  const unit = rows.length === 1 ? translateValue("account") : translateValue("accounts");
  elements.resultCount.textContent = `${rows.length} ${unit}`;

  if (!rows.length) {
    elements.accountTable.innerHTML = "";
    return;
  }

  elements.accountTable.innerHTML = rows.map((account, index) => `
    <tr data-account-index="${accounts.indexOf(account)}">
      <td>
        <div class="account-cell">
          <span class="avatar">${account.name.slice(0, 1)}</span>
          <strong>${account.name}</strong>
        </div>
      </td>
      <td>${translateValue(account.plan)}</td>
      <td><span class="pill">${translateValue(account.channel)}</span></td>
      <td>${formatCurrency(account.mrr)}</td>
      <td>${formatNumber(account.users)}</td>
      <td><span class="pill ${account.health === "Healthy" ? "health-good" : "health-watch"}">${translateValue(account.health)}</span></td>
    </tr>
  `).join("");
}

function renderSegments(rows) {
  const stages = ["Activation", "Adoption", "Expansion", "Renewal"];
  const max = Math.max(...stages.map((stage) => rows.filter((account) => account.stage === stage).length), 1);
  elements.segmentStack.innerHTML = stages.map((stage) => {
    const count = rows.filter((account) => account.stage === stage).length;
    const percent = Math.max(8, Math.round((count / max) * 100));
    return `
      <div class="segment-row">
        <strong>${stage}</strong>
        <div class="bar-track" aria-hidden="true"><span style="width: ${percent}%"></span></div>
        <span>${count}</span>
      </div>
    `;
  }).join("");
}

function renderForecast(rows) {
  const metrics = calculateMetrics(rows);
  const target = 320000;
  const projected = Math.round(metrics.revenue * 1.18);
  const percent = Math.min(100, Math.round((projected / target) * 100));
  elements.forecastValue.textContent = formatCurrency(projected);
  elements.forecastProgress.style.width = `${percent}%`;
  elements.forecastBadge.textContent = percent >= 92 ? "On track" : "Needs attention";
  elements.forecastCopy.textContent = `${percent}% of quarterly target covered by selected accounts.`;
}

function renderAlerts() {
  elements.alertList.innerHTML = alerts.map((alert) => `
    <article class="alert-item ${alert.severity === "critical" ? "critical" : ""}">
      <strong>${alert.title}</strong>
      <small>${alert.detail}</small>
    </article>
  `).join("");
}

function openDrawer(account) {
  elements.drawerTitle.textContent = account.name;
  elements.drawerBody.innerHTML = `
    <div class="drawer-stat-grid">
      <div class="drawer-stat"><span>Owner</span><strong>${account.owner}</strong></div>
      <div class="drawer-stat"><span>Risk</span><strong>${account.risk}</strong></div>
      <div class="drawer-stat"><span>NPS</span><strong>${account.nps}</strong></div>
      <div class="drawer-stat"><span>Stage</span><strong>${account.stage}</strong></div>
    </div>
    <div class="timeline-item">
      <span>Next action</span>
      <strong>${account.next}</strong>
    </div>
    <div class="timeline-item">
      <span>Mock timeline</span>
      <strong>QBR prepared · Expansion signal detected · Health reviewed</strong>
    </div>
  `;
  elements.drawer.classList.add("open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.drawerScrim.hidden = false;
  translatePage();
}

function closeDrawer() {
  elements.drawer.classList.remove("open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.drawerScrim.hidden = true;
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
  elements.tooltip.innerHTML = `<strong>${point.label}</strong><br>${state.chartMetric === "revenue" ? `$${value}k ${translateValue("revenue")}` : `${value}k ${translateValue("users")}`}`;
  drawChart();
}

function render() {
  const rows = filteredAccounts();
  renderMetrics(rows);
  renderTable(rows);
  renderSegments(rows);
  renderForecast(rows);
  renderAlerts();
  renderActivity(rows);
  drawChart();
  translatePage();
}

function simulateLoad() {
  setLoading(true);
  elements.resultCount.textContent = translateValue("Loading");
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

elements.viewFilter.addEventListener("change", (event) => {
  state.view = event.target.value;
  Object.assign(state, savedViews[state.view]);
  elements.dateFilter.value = state.dateRange;
  elements.channelFilter.value = state.channel;
  elements.searchInput.value = state.query;
  document.querySelectorAll("[data-chart-metric]").forEach((item) => {
    item.classList.toggle("active", item.dataset.chartMetric === state.chartMetric);
  });
  render();
});

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

elements.accountTable.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-account-index]");
  if (!row) return;
  openDrawer(accounts[Number(row.dataset.accountIndex)]);
});

elements.closeDrawer.addEventListener("click", closeDrawer);
elements.drawerScrim.addEventListener("click", closeDrawer);

window.addEventListener("resize", drawChart);
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setStoredLanguage(button.dataset.lang);
    render();
  });
});

translatePage();
simulateLoad();
