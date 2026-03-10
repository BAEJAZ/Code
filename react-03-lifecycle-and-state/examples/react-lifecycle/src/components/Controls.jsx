export default function Controls({ handleMount, handleUpdate, handleUnmount, mounted }) {
    return (
      <div className="row">
        <button onClick={handleMount} disabled={mounted}>
          Mount
        </button>
        <button onClick={handleUpdate} disabled={!mounted}>
          Update
        </button>
        <button onClick={handleUnmount} disabled={!mounted}>
          Unmount
        </button>
      </div>
    );
}
