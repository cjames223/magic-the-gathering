import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css'

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'

export default function DataTableComp () {
    const [data, setData] = useState([]);
    const columns = [
        {field: 'number', header: 'Number'},
        {field: 'name', header: 'Name'},
        {field: 'type', header: 'Type'},
        {field: 'text', header: 'Text'}
    ];

    // const productService = new ProductService();
    const url = 'https://standard-mtg.herokuapp.com/cards/'

    // useEffect(() => {
    //     axios.get(url)
    //         .then(data => setData(data))
    //         .then(data => console.log(data))
    // }, []);

    // axios.get(url)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .then(res => {
    //             setData(res.data)
    //         })

    async function getData() {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            throw error
        }
    }

    getData()

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    console.log(data)

    return (
        <div>
            <div className="card">
                <DataTable value={data} responsiveLayout="scroll">
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}