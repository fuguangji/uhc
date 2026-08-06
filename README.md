# UHC Championship Website

這是一個以繁體中文為主、面向 UHC 錦標賽活動的靜態官方網站與程式儲存庫。專案目前以 HTML、CSS 與原生 JavaScript 建構，適合直接部署於 GitHub Pages、靜態檔案主機或本機預覽。

## 專案特色

- 提供主頁與 2027 冬季賽事導覽頁
- 以霓虹、玻璃感與深色主題呈現活動氛圍
- 支援手機與桌面版響應式版面
- 使用 Tailwind CDN、Lucide Icons 與 Three.js 製作互動效果

## 目錄結構

- index.html：主 Landing Page
- main.js：額外腳本檔案
- 2027-winter/：2027 冬季賽事子站頁面
  - index.html：冬季主頁
  - database/：礦物與裝備資料頁
  - encyclopedia/：系統百科頁
  - progress/：開發進度頁
  - register/：報名頁
  - rules/：規則頁

## 本機預覽

直接在瀏覽器中開啟以下檔案即可：

- [index.html](index.html)
- [2027-winter/index.html](2027-winter/index.html)

如果你使用 VS Code，可以安裝 Live Server 擴充功能，然後對 HTML 檔案點擊「Go Live」進行即時預覽。

## 部署建議

此專案是靜態網站，建議部署方式如下：

1. 將整個倉庫內容上傳到 GitHub
2. 前往 GitHub Pages 設定
3. 選擇根目錄或 docs 目錄作為發布來源
4. 完成後即可透過 GitHub Pages 存取網站

## 未來可優化項目

- 補齊缺少的圖片與 logo 資源
- 依照實際賽事內容更新頁面文字與報名資訊
- 將共用元件整理為更易維護的結構
- 加入 SEO、社群分享與網站分析設定

## 貢獻方式

歡迎依照專案方向修改內容與樣式，若有新功能或修正建議，請先建立分支後提交變更。
