import React from 'react';
import { Router, Route, Link } from 'react-router';

function main () {
    console.log(React, Router, Route, Link);
    var cId = '5';
    

    function filterSon (data, cId) {
        let filterData = data.filter((item) => {
            return item.id === cId;
        })
        let itemObj = filterData.length && filterData[0];

        if (typeof itemObj === 'object') {
            return 1;
        } else {
            data.forEach((item) => {
                filterData(item.son, )
            })
        }
    }


    
}