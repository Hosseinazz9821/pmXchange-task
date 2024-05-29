import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: "0 0 20px 20px",
      }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3772ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
