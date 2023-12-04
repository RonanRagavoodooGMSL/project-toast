import React, { useContext } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, id, variant }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { stack, setStack } = useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => setStack(stack.filter((toast) => toast.id !== id))}
      >
        <X size={24} aria-label="Dismiss message" aria-live="off" />
      </button>
    </div>
  );
}

export default Toast;
