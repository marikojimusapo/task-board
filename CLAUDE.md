# task-board プロジェクト

## プロジェクト概要

スプリントのタスク管理ボードアプリケーション。

## Git 運用ルール

- コードを変更するたびに、必ず GitHub にコミット＆プッシュすること
- コミットメッセージは日本語で記述し、変更内容を簡潔に説明すること
- コミット前に `git status` で変更ファイルを確認すること
- ブランチ戦略: `main` ブランチを常に動作する状態に保つこと

## デプロイ先

- GitHub Pages: https://marikojimusapo.github.io/task-board/
- `main` ブランチへのプッシュで GitHub Actions が自動デプロイを実行する

## 技術スタック

| 種別 | 技術 |
|---|---|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 6 |
| スタイリング | CSS Modules なし・グローバル CSS（App.css） |
| 状態管理 | React useState（外部ライブラリなし） |
| データ永続化 | localStorage |
| CI/CD | GitHub Actions |
| ホスティング | GitHub Pages |

## コンポーネント命名規約

- コンポーネントファイル名は **PascalCase**（例: `App.jsx`, `TaskList.jsx`）
- コンポーネント関数名も **PascalCase** で統一
- CSS クラス名は **kebab-case**（例: `.task-list`, `.delete-btn`）
- ローカルストレージのキーは **kebab-case** の文字列定数で管理（例: `task-board-tasks`）

## 一般ルール

- ファイルの削除・上書き前には必ず確認を求めること
- フォルダ名・ファイル名の日付は「YYYYMMDD」形式にすること
- 作業が完了したら「Claude_Work/作業ログ/」フォルダに実施内容を追記すること
