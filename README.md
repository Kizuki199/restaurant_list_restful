# 我的餐廳清單
一個使用 Node.js + Express 打造的餐廳美食網站，可以查看自己的餐廳清單並依照特定方式進行排序、依照餐廳名稱與類別進行搜尋，在查詢不到關鍵字餐廳時，頁面會有提示沒有符合的餐廳、同時在每個餐廳列表中，可以進行修改及刪除表上餐廳，也可以任意新增自己喜歡的餐廳名單。

## 產品功能
1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依照中文名稱、餐廳類別進行搜尋
3. 使用者可以新增新的餐廳
4. 使用者可以編輯目前已有餐廳內容
5. 使用者可以刪除餐廳

## 環境建置與需求
- Express: "^1.4.1"
- Bootstrap-icon: "^4.17.1"
- express-handlebars: "^5.3.0"

## 安裝與執行步驟
打開終端機將專案下載至本地執行
```
git clone https://github.com/tinahung126/restaurantList.git
```
進入專案資料夾
```
cd restaurant_list_crud
```
安裝專案需求套件
```
npm i nodemon
```
新增種子資料 
```
npm run seed
```
啟動伺服器，執行專案
```
npm run dev
```
終端機顯示 Start listening on http://localhost:3000 即成功啟動，可至 http://localhost:3000 開始使用！