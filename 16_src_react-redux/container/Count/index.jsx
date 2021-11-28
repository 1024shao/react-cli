import CountUI from "../../components/Count";

import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction } from '../../redux/count_action.js'
// 传递给UI组件的数据(状态)
// const mapStateToProps = state => { count: state }
function mapStateToProps(state) {
  return { count: state }
}
// 传递给UI组件的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)