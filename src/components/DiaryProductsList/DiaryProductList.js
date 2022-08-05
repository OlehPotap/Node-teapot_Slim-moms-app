import s from './DiaryProductList.module.scss';
import { connect } from 'react-redux';
// import {
//   getProductSelector,
//   getSelectedDate,
//   getDayInfo,
// } from '../../redux/products/products-selectors';
// import { deleteProduct } from '../../redux/products/products-operations';
import IconClose from '../IconClose/IconClose';

const DiaryProductList = ({ openModalProp, product, deleteProductProp }) => {
  function handleOpenModalClick(event) {
    openModalProp(event);
  }

  return (
    <div>
      {product.eatenProducts && !product.eatenProducts.length && (
        <span>The list is empty</span>
      )}
      <ul className={s.calendarTable}>
        {product.eatenProducts?.map(item => (
          <li key={item.id} className={s.listItem}>
            <ul className={s.list}>
              <li className={s.foodName}>{item.title} </li>
              <li className={s.foodWeight}>{item.weight} gr</li>
              <li className={s.line}>{Math.round(item.kcal)} kcal</li>
              <li>
                <button
                  type="button"
                  className={s.buttonDelete}
                  onClick={() => deleteProductProp(product.id, item.id)}
                >
                  <IconClose />
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={s.button}
        onClick={() => handleOpenModalClick()}
      >
        +
      </button>
    </div>
  );
};

// const mapStateToProps = state => ({
//   product: getProductSelector(state),
//   selectedDate: getSelectedDate(state),
//   dayInfo: getDayInfo(state),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteProductProp: (dayId, productId) =>
//     dispatch(deleteProduct(dayId, productId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductList);

export default DiaryProductList;
