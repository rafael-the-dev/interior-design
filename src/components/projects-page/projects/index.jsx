import * as React from "react";
import ListItem from "../card";
import Tab from "../tab";

const Container = () => {
    const [ tab, setTab ] = React.useState("all");

    const list = React.useRef([
        {
            category: [ "contemporary", "retreat" ],
            id: "e4f7ee22-dc72-4472-89e9-9fed581904b6",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "traditional" ],
            id: "5dae956d-ec88-41dc-893b-20ef5aa14bff",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "retreat" ],
            id: "36dc83b7-52ed-4e91-9455-a708861eecdf",
            image: "",
            title: ""
        },
        {
            category: [ "contemporary", "retreat" ],
            id: "f5a72d1a-f4cf-4aa5-9b83-b8cafce922ec",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "traditional" ],
            id: "b094ff89-3937-447e-b5f9-904f896e11fe",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "retreat" ],
            id: "c36dc27d-240f-463f-8b2b-616443c2d98a",
            image: "",
            title: ""
        },
        {
            category: [ "contemporary", "retreat" ],
            id: "e2e4006c-dace-457b-b10c-3181fab15a81",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "traditional" ],
            id: "ab11c625-9bc1-4e76-a54c-d37294d085c8",
            image: "",
            title: ""
        },
        {
            category: [ "modern", "retreat" ],
            id: "c5f2b86b-a333-47a1-9faf-7c732904633c",
            image: "",
            title: ""
        }
    ]);

    const tabs = React.useRef([
        {
            category: "",
            id: "all",
            label: "All projects"
        },
        {
            category: "",
            id: "modern",
            label: "Modern"
        },
        {
            category: "",
            id: "contemporary",
            label: "Contemporary"
        },
        {
            category: "",
            id: "traditional",
            label: "Traditional"
        },
        {
            category: "",
            id: "retreat",
            label: "Retreat"
        }
    ])

    const getSize = React.useCallback((category) => 
        category === "all" ? list.current.length : list.current.reduce((currentValue, currentItem) => {
            return currentItem.category.includes(category) ? currentValue + 1 : currentValue;
        }, 0)
    , []);

    const clickHandler = React.useCallback(clikedTabId => () => setTab(clikedTabId), [])

    return (
        <div className="px-5 sm:px-[10%] lg:px-5 py-12 md:py-16">
            <div className="flex flex-wrap justify-center">
                {
                    tabs.current.map((item, index) => (
                        <Tab 
                            label={ item.label }
                            id={ item.id }
                            length={getSize(item.id)} 
                            key={index}
                            onClick={clickHandler(item.id)} 
                            selectedTab={tab} 
                        />

                    ))
                }
            </div>
        </div>
    );
};

export default Container;