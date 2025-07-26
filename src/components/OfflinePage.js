
const OfflinePage = () => {
    const handleReload = () => {
        window.location.reload();
    }
    return(
        <div className="offline-page-container">
            <h1 className="offline-heading">OFFLINE 🔴</h1>
            <h3>Please check your internet</h3>
            <button className="off-btn" onClick={handleReload}>RETRY</button>
        </div>
    )
}
export default OfflinePage;