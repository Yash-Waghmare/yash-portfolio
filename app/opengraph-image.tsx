import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = profile.homeTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0f172a",
          color: "#e2e8f0",
          fontFamily: "monospace",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 22, marginBottom: 32 }}>
          yash@portfolio — zsh
        </div>
        <div style={{ display: "flex", fontSize: 28, marginBottom: 12 }}>
          <span style={{ color: "#38bdf8" }}>yash@portfolio</span>
          <span>:</span>
          <span style={{ color: "#818cf8" }}>~</span>
          <span style={{ color: "#0ea5e9" }}>$</span>
          <span style={{ color: "#f8fafc", marginLeft: 12 }}>whoami</span>
        </div>
        <div style={{ display: "flex", fontSize: 48, color: "#f8fafc", marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#0ea5e9", marginTop: 8 }}>
          Software Developer — {profile.headline}
        </div>
        <div style={{ display: "flex", color: "#64748b", fontSize: 22, marginTop: 40 }}>
          type a command, or click one.
        </div>
      </div>
    ),
    { ...size },
  );
}
