import "./App.css";
import { Button } from "./Button";

export function App() {
  function onClickTest() {
    alert("体験します");
  }

  function onClickNotTest() {
    alert("体験しません");
  }

  return (
    <main className="landing-body">
      <div className="title-body">
        <h1 className="landing-title">
          レンズ越しのあなたは
          <br />
          綺麗に映った。
        </h1>
      </div>
      <Button label={"体験する"} test={onClickTest} />
      <Button label={"体験しない"} test={onClickNotTest} />
    </main>
  );
}
