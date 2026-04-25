import { ImageResponse } from "next/og";

export const alt = "Atul Hooda — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#D04A1F",
          color: "#efece7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 6,
            fontWeight: 700,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          atulhooda.tech
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 180,
              fontWeight: 900,
              letterSpacing: -6,
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Atul Hooda
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 38,
              fontWeight: 700,
              maxWidth: 900,
              lineHeight: 1.15,
            }}
          >
            Computer Engineering Student.
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 28,
              fontWeight: 400,
              opacity: 0.8,
              maxWidth: 900,
            }}
          >
            Building AI/ML and full-stack systems that solve real problems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>AIT Pune</span>
            <span>·</span>
            <span>Engageo Agency</span>
          </div>
          <div style={{ display: "flex" }}>Portfolio</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
