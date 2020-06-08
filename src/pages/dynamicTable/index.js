import React from 'react'
import { Table, Tooltip } from 'antd'

export default class DynamicTable extends React.Component{

    formmatcolumn = (cloumns) => {
        return cloumns.map((item) => {
            if(item.dataIndex !== "name"){
                return item;
            }
            item.render = (text, record, index) => {
                const name = record.name;
                return (
                    // index === 0? 
                    // <span>
                    //     {item}
                    // </span>
                    <Tooltip title={`${name}`}>
                        <span>{name}</span>
                    </Tooltip>
                )}
            return item;
        })
    }
    render() {
        const data = [{name: "zhangsan", info: "info1", class: "456", key: "1"}];
        const cloumns = [{title: "姓名", dataIndex: "name", key: "name"}, {title: "信息", dataIndex: "info", key: "info"}, {title: "课程", dataIndex: "class", key: "class"}];
        const column = this.formmatcolumn(cloumns);
        console.log(column);
        return(
                <Table
                    dataSource={data}
                    columns={column}
                    scroll={{ y: 240 }}
                    pagination={{ pageSize: 50 }}
                />
        )
    }
}