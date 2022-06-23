import React from "react";
import { Button, Container } from "react-bootstrap";
import "./page-layout.component.scss";

interface Props {
  title?: string;
  content: JSX.Element;
  leftButtonText?: string;
  rightButtonText?: string;
  onLeftBtnClick?: () => void;
  onRightBtnClick?: () => void;
}

export default function PageLayout({
  title,
  content,
  leftButtonText,
  rightButtonText,
  onLeftBtnClick,
  onRightBtnClick,
}: Props): JSX.Element {
  return (
    <Container className="mx-auto">
      <div className="d-flex justify-content-center flex-wrap page-wrapper">
        {title && (
          <div className="flex-item">
            <h2>{title}</h2>
          </div>
        )}
        <div className="flex-item">
          <div className="d-flex justify-content-between">
            {leftButtonText && (
              <Button onClick={onLeftBtnClick} variant="secondary">
                {leftButtonText}
              </Button>
            )}

            {rightButtonText && (
              <Button onClick={onRightBtnClick} variant="secondary">
                {rightButtonText}
              </Button>
            )}
          </div>
        </div>
        <div className="flex-item">
          <div className="w-100">{content}</div>
        </div>
      </div>
    </Container>
  );
}
