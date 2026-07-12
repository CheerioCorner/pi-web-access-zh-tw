# pi-web-access 繁體中文版

> 本專案是 [pi-web-access](https://github.com/nicobailon/pi-web-access) 的繁體中文在地化分支，
> 原作者為 [Nico Bailon](https://github.com/nicobailon)。
>
> 原始專案採用 MIT 授權，本分支亦同。

---

## 與原版的差異

- ✅ **所有 UI 文字**改為繁體中文（`curator-page.ts` → 搜尋結果審閱頁面）
- ✅ **功能完全不變** — 工具名稱（`/websearch`、`/curator`）、程式邏輯均與原版一致
- ✅ 每次上游更新時可透過 `git pull` 再套用翻譯 patch 來更新

## 安裝

```bash
# 直接從 GitHub 安裝（推薦）
pi install https://github.com/CheerioCorner/pi-web-access-zh-tw

# 或透過 git: 前綴
pi install git:github.com/CheerioCorner/pi-web-access-zh-tw

# 或從本機目錄安裝
cd /path/to/pi-web-access-zh-tw
pi install .
```

## 使用

所有指令與原版相同：

| 指令 | 說明 |
|------|------|
| `/websearch <查詢>` | 執行網頁搜尋 |
| `/curator` | 開啟搜尋結果審閱介面 |
| `Ctrl+Shift+W` | 活動監控器 |

## 翻譯涵蓋範圍

| 區域 | 說明 |
|------|------|
| HTML 頁面 | 標題、hero 區塊、按鈕、提示文字 |
| 摘要面板 | 標題、副標題、placeholder、階段標籤 |
| 錯誤訊息 | 搜尋失敗、改寫失敗、API 錯誤等 |
| Aria-labels | 無障礙標籤 |
| 工具提示 | 滑鼠懸停提示 |
| 快捷鍵區 | 全選/取消等 |

保留原文的內容：**提供者品牌名稱**（OpenAI、Brave、Gemini 等）

## 更新方式

當上游釋出新版時：

```bash
# 1. 拉取最新版
git pull origin main

# 2. 套用翻譯（會自動翻譯所有 UI 文字與 AI 提示詞）
node apply-zh-TW.mjs

# 3. 重新安裝
pi install .
```

> 你也可以用傳統方式套用翻譯 patch：
> ```bash
> git apply zh-TW-changes.diff
> ```

## 授權

MIT License — 詳見 [LICENSE](./LICENSE)。

原版權所有 © 2025 Nico Bailon