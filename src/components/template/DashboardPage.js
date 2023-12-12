import styles from "./DashboardPage.module.css";
function DashboardPage({ createdAt }) {
  const date = new Date(createdAt).toLocaleDateString("fa-IR");
  return (
    <div className={styles.container}>
      <h3>سلام👋🏻</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر ان را مشاهده کنند.</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت: </p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;