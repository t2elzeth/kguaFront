if ! kubectl rollout status -w deployment "ioka-landing"; then
  kubectl rollout restart deployment "ioka-landing"
  if ! kubectl rollout status -w deployment "ioka-landing"; then
    kubectl rollout undo deployment "ioka-landing"
    exit 1
  fi
  kubectl rollout status -w deployment "ioka-landing"
fi