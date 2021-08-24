import Style from "./loading.module.scss";

export function Loading(): React.ReactElement {
  return (
    <div className={Style.loading}>
      <h1>LOADING</h1>
    </div>
  );
}
