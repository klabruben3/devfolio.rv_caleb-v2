import FollowMouse from "./FollowMouse";

export default function Terminal() {
  return (
    <div className="fixed top-6 left-6 font-mono text-xs text-neutral-600 z-50">
      <div className="flex items-center">
        <FollowMouse />
        <span className="ml-3">Admin.online</span>
      </div>
    </div>
  );
}
