import React from 'react';
import './App.less';
import Detail from '../Detail';
// const sss = React

export default React.createClass({
    render() {
        const Details = [
            { key: '姓名', value: '夏＊＊' },
            { key: '身份证', value: '588176＊＊＊＊＊＊＊＊1823' },
            { key: '借款金额', value: '5000.00元' },
            { key: '还款方式', value: '到期一次还清本付息' },
            { key: '还款本息', value: '65000.00元' },
        ];
        const Credits = [
            { key: '央行征信', value: '已认证' },
            { key: '学历征信', value: '未认证' },
            { key: '社保征信', value: '未认证' },
            { key: '公积金征信', value: '已认证' },
            { key: '运营商授权', value: '未认证' },
            { key: '芝麻信用', value: '未认证' },
        ];
        /* const listItems = Details.map((item) => {
            return <>
        }); */
        return (
            <div>
                <section className="b-detail">
                    <Detail list={ Details } title= "借款详情"/>
                    <Detail list={ Credits } title= "征信详情" />
                    <button className="btn">放款</button>
                </section>
            </div>
        );
    },
});
