import React from 'react';
import demo from '../Demo';
import './App.less';
// const sss = React

export default React.createClass({
    

    render() {
        let t = '';
        
        return (
            <div>
                <section className="b-detail">
                  
                  <div className="head">借款详情</div>
                  <ul className="detail">
                      <li>
                          <span className="left">姓名</span>
                          <span className="right">夏＊＊</span>
                      </li>
                      <li>
                          <span className="left">身份证</span>
                          <span className="right">588176*＊＊＊＊＊＊＊1823</span>
                      </li>
                      <li>
                          <span className="left">借款金额</span>
                          <span className="right">5000.00元</span>
                      </li>
                      <li>
                          <span className="left">借款期限</span>
                          <span className="right">30天</span>
                      </li>
                      <li>
                          <span className="left">还款方式</span>
                          <span className="right">到期一次还本付息</span>
                      </li>
                      <li>
                          <span className="left">还款本息</span>
                          <span className="right">65000.00</span>
                      </li>

                  </ul>
                  <div className="head">征信详情</div>
                  <ul className="detail">
                      <li>
                          <span className="left">央行征信</span>
                          <span className="right">已认证</span>
                      </li>
                      <li>
                          <span className="left">学历征信</span>
                          <span className="right">未认证</span>
                      </li>
                      <li>
                          <span className="left">社保征信</span>
                          <span className="right">未认证</span>
                      </li>
                      <li>
                          <span className="left">公积金征信</span>
                          <span className="right">已认证</span>
                      </li>
                      <li>
                          <span className="left">运营商授权</span>
                          <span className="right">未认证</span>
                      </li>
                      <li>
                          <span className="left">芝麻信用</span>
                          <span className="right">未认证</span>
                      </li>


                  </ul>
                  <button className="btn">放款</button>
                </section>
            </div>
        );
    },
});
