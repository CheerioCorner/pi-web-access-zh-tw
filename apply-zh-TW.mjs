// apply-zh-TW.mjs — 繁體中文本地化翻譯腳本
import { readFileSync, writeFileSync } from "fs";

let f = readFileSync("curator-page.ts", "utf8");

// ========== 基本字串取代 ==========
const r = [
  // HTML lang
  ['lang="en"', 'lang="zh-TW"'],
  // 標題
  ["<title>Curate Search Results</title>", "<title>搜尋結果審閱</title>"],
  // Hero
  ["Web Search", "網頁搜尋"],
  // 按鈕
  ['"Generate"', '"生成"'],
  ['"Cancel"', '"取消"'],
  ['"Approve"', '"批准"'],
  ['"Preview"', '"預覽"'],
  ['"Back"', '"返回"'],
  ['"Regenerate"', '"重新生成"'],
  ['"Toggle all"', '"全選/取消"'],
  ['"Select all"', '"全選"'],
  ['"Deselect all"', '"取消全選"'],
  // 送出相關按鈕
  ['"Send selected results without summary"', '"發送所選結果（不附摘要）"'],
  ['"Generating summary\u2026"', '"正在生成摘要\u2026"'],
  ['"Summary ready"', '"摘要已就緒"'],
  ['"No results yet"', '"尚無結果"'],
  ['"Waiting for results\u2026"', '"等待結果\u2026"'],
  ['"Select results to summarize"', '"選擇結果以摘要"'],
  ['"Results sent"', '"結果已傳送"'],
  ['"Summary approved"', '"摘要已批准"'],
  // Placeholder
  ['"Add a search\u2026"', '"新增搜尋\u2026"'],
  ['"Summary draft will appear here\u2026"', '"摘要草稿將顯示在這裡\u2026"'],
  ['"Optional feedback for regeneration\u2026"', '"選填回饋用於重新生成\u2026"'],
  // 摘要面板
  ['"Review summary draft"', '"審查摘要草稿"'],
  ['"Edit the summary before approving."', '"批准前可編輯摘要。"'],
  ['"Generating summary draft\u2026"', '"正在生成摘要草稿\u2026"'],
  ['"Summary Preview"', '"摘要預覽"'],
  ['"Session Ended"', '"工作階段已結束"'],
  ['"Time\'s up — sending all results to your agent."', '"時間到 — 正在傳送所有結果給你的代理。"'],
  // Aria-labels
  ['"summary-review"', '"摘要審查"'],
  ['"summary-provider"', '"摘要提供者"'],
  ['"summary-model"', '"摘要模型"'],
  // Tooltips
  ['"Rewrite query with AI"', '"使用 AI 改寫查詢"'],
  ['"Close"', '"關閉"'],
  ['"Click to adjust"', '"點擊調整"'],
  ['"Preview rendered summary"', '"預覽轉譯後的摘要"'],
  // Error
  ['"Search failed"', '"搜尋失敗"'],
  ['"Rewrite failed"', '"改寫失敗"'],
  ['"Failed to add search"', '"新增搜尋失敗"'],
  ['"auto retry failed: "', '"自動重試失敗："'],
  ['"unknown error"', '"未知錯誤"'],
  ['"Failed to generate summary — "', '"生成摘要失敗 — "'],
  ['"Invalid summary model"', '"無效的摘要模型"'],
  ['"Summary model not found"', '"找不到摘要模型"'],
  ['"No API key available for summary model"', '"摘要模型無可用 API 金鑰"'],
  ['"Invalid provider"', '"無效的提供者"'],
  // providerLabel
  ['return "Unknown"', 'return "未知"'],
  // Auto dropdown
  ['"Auto"', '"自動"'],
  ['<option value="">Auto</option>', '<option value="">自動</option>'],
  // 生成階段
  ['"Planning summary"', '"規劃摘要"'],
  ['"Drafting summary"', '"撰寫摘要"'],
  ['"Polishing summary"', '"潤飾摘要"'],
  // 狀態
  ['"Searching sources"', '"搜尋來源"'],
  ['"Searches will begin shortly."', '"搜尋即將開始。"'],
  ['"What do you need?"', '"您需要什麼？"'],
  ['"Feedback\u2026"', '"回饋\u2026"'],
  ['"Closing in "', '"倒數關閉："'],
];

for (const [a, b] of r) {
  f = f.replaceAll(a, b);
}

// ========== 特殊模式：動態模板字串 ==========

// "Searching…" status
f = f.replaceAll('"Searching\u2026"', '"搜尋中\u2026"');

// "Searches Complete" — happens in template literals
// Pattern: `${completedCount}/${totalCards} Searches Complete` and `${completedCount} Searches Complete`
f = f.replaceAll('Searches Complete', '搜尋完成');

// Search status: "completed" and "searching" in heroStatus
f = f.replaceAll('" completed"', '" 已完成"');
f = f.replaceAll('" searching"', '" 搜尋中"');

// Summary subtitle states
f = f.replaceAll('"Selection changed — regenerating summary\u2026"', '"選擇已變更 — 正在重新生成摘要\u2026"');
f = f.replaceAll('"Selection changed — summary will be regenerated\u2026"', '"選擇已變更 — 摘要即將重新生成\u2026"');

// "Fallback summary of" and "Summary of"
f = f.replaceAll('"Fallback summary of "', '"後備摘要："');
f = f.replaceAll('"Summary of "', '"摘要："');

// " of " in counts
// This is tricky — need to be more specific
f = f.replaceAll('" of "', '" 的 "');

// "queries" in dynamic text
f = f.replaceAll('" queries"', '" 個查詢"');

// "s left" in timer
f = f.replaceAll('"s left"', '" 秒"');

// Hero description
f = f.replaceAll(
  '"Check the results to include, then generate and approve a summary."',
  '"勾選要包含的結果，然後生成並批准摘要。"'
);

writeFileSync("curator-page.ts", f, "utf8");
console.log("✅ 翻譯完成！");