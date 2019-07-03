## Reactアプリケーション「ゲッワイ」

### [https://gewwai.firebaseapp.com](https://gewwai.firebaseapp.com)  

<a href="https://gewwai.firebaseapp.com"><img src="https://cacoo.com/diagrams/ET8RhdVr011MCI4Y-08DDA.png" width="550px"></a>  

ただWifiと電源があるお店を検索する機能しか持たないサービスです。  
メリットは最小限の作業で検索できること（だけ）です。  

## アプリケーション製作の意図

こちらのアプリケーションはReactJSおよび、Reduxを使用して作成しています。

以前Ruby on Rails(with Docker, AWS)で作成したWEBアプリケーション
([https://github.com/daichi5/kotonoha](https://github.com/daichi5/kotonoha))  
には「フロントエンドをJSで状態管理し、バックエンドAPIとやりとりする」という  
実際のアプリケーション運用に近い形ではないという課題がありました。  

そのためこのアプリケーションでは  
**・フロントエンドに表現豊かなUIを盛り込む**  
**・フロントエンドとAPIを連携させる**  
という点を意識しています。  

## 構成図

![構成図](https://cacoo.com/diagrams/ET8RhdVr011MCI4Y-69EB0.png)  

フロントはReactとReduxで描画し、
ぐるなびAPIからのレスポンスを受け取り検索結果を表示する  
というシンプルな設計となっています。  

各コンポーネントの状態は全てReduxで管理しています。  
またぐるなび様のAPI利用制限を考慮し、検索結果は６件のみの取得としています。  