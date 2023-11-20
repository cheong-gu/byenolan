import { ReactNode } from "react";

type HomeModalFrameProps = { isOpen: boolean; children: ReactNode };

export const HomeModalFrame = ({ isOpen, children }: HomeModalFrameProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
      </div>
    </div>
  );
};