export default function ButtonIcon({ icon, cls, action }) {
  const actionButton = () => {
    if (action !== undefined) {
      action();
    }
  };

  return (
    <button onClick={actionButton} className={`btn_${cls}`}>
      <i className={`fa fa-${icon} fa-lg ${cls}`}></i>
    </button>
  );
}
