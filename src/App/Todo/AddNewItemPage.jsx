import './styles.css';

export const AddNewItemPage = () => {
  return (
    <>
      <div className="todoAddItemPage">
        <strong>TODO</strong>
        <div className="todoAddItemRow">
          <p>Zrób tutaj inputy</p>
        </div>
        <div className="todoAddItemRow">
          <span>Tytuł</span>
          <input></input>
        </div>
        <div className="todoAddItemRow">
          <span>Autor</span>
          <input></input>
        </div>
        <div className="todoAddItemRow">
          <span>Treść</span>
          <input></input>
        </div>
        <div className="todoAddItemButtons">
          <div></div>
          <button>Cofnij</button>
          <button>Dodaj</button>
        </div>
      </div>
    </>
  );
};
