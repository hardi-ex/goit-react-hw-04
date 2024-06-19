import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.div}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
export default Loader;
