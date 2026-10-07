import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#9c4a32",
          display: "flex",
          padding: 6,
        }}
      >
        <div style={{ width: "100%", height: "100%", background: "#f3eee6" }} />
      </div>
    ),
    size,
  );
}
