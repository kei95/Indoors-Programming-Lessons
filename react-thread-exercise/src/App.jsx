import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState([]);
  // 実際に入力されたものを値として使う
  // 上段は文字として扱うためuseStateの()に「""」を最初から入力
  // 下段は配列として扱うためuseStateの()に「[]」を最初から入力

  function Post() {
    if (text.length === 3) {
      setInputText("");
    } else {
      setText((prevState) => [...prevState, { japanese: inputText }]);
      setInputText("");
    }
  }
  //if文としては
  //「textの配列が３つの時はsetInputTextを""で上書きする」
  //「そうでない場合はtextの配列をすべてh1に表示する」
  //「textの配列の中身はobject・japaneseであり、japaneseとはinputTextである」
  //って意味になる
  //ゆえにjapanese=inputTextする

  //...textはスプレッド構文であり、配列の中身をすべて表示する機能をもつ

  function Delete() {
    setInputText("");
    setText([]);
  }
  // 入力画面を""と[]で上書きして空白化している

  return (
    <>
      <div>
        {text.map((haiku, index) => (
          <h1 key={`${haiku.japanese}-${index}`}>{haiku.japanese}</h1>
        ))}
      </div>
      {/* mapはtextという配列とhaikuという変数を指定し、それらに指定した更新処理を適用している
      図解すると「配列.map((変数) => 更新処理)」になる
      訳すると「textって配列の中身にhaikuと紐づけられたjapanese=inputTextを加える」という処理になる*/}

      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      {/* 入力内容⇒setInputTextになり、これにvalueでinputTextと同じという属性を付与*/}
      {/* ゆえにsetInputText=inputTextとなる */}

      <div className="card">
        <button onClick={Post} style={{ marginRight: "1rem" }}>
          投稿
        </button>
        <button onClick={Delete} style={{ marginLeft: "1rem" }}>
          削除
        </button>
        {/* onClickはボタンを押した時に指定のファンクションを起動させる
        この場合は投稿ボタンを押したらファンクションPostが起動 */}
        {/* 削除ボタンを押したらファンクションDeleteが起動 */}
        {/* style={{ marginLeft: "1rem" }}はボタンのデザイン */}
      </div>
    </>
  );
}

export default App;
