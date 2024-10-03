import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useEffect,useState,useMemo } from "react";
import useDebounce from "../../hooks/useDebounce";


const products = [
	{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
	{ category: "Health", price: "$199.99", stocked: true, name: "Lotion" },
	{ category: "Household Supplies", price: "$199.99", stocked: true, name: "Frying Pan" },
];

const productsTransformed = [
	{
		categoryName: "Sporting Goods",
		products: [
			{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
			{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
			{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
		],
	},
	{
		categoryName: "Electronics",
		products: [
			{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
			{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
			{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
		],
	},
];

function transformProducts(products) {
	const transformed = [];
	const categories = {};

	for (const product of products) {
		if (product.category in categories) {
			categories[product.category].push(product);
		} else {
			categories[product.category] = [product];
		}
	}

	for (const category in categories) {
		transformed.push({
			categoryName: category,
			products: categories[category],
		});
	}
	//console.log(transformed);
	return transformed;
}

//filter function : filternotworking
//bug:
//mutation
//we need a filtered list of products for category without changing the orignal .create a 

function filter(categories,filterText,checkInStock) {
    
		console.log("filter is running");
		if(filterText === "" && !checkInStock) return categories;

		filterText =filterText.toLowerCase();

		return categories?.map((category) => {
				return {
					...category,
					products: category.products.filter((product) => {
				//const name = product.name.toLowerCase()
						const matchedFilteredText = product.name.toLowerCase().includes(filterText);
						return checkInStock ? matchedFilteredText && product.stocked : matchedFilteredText;
					}),	
				};
		});
}
	


export default function FilterableProductTable() {
	//always use hooks at top level before any early return
  		const [categories,setCategories] =useState([]);
  		const[search, setSearch]= useState('');
  		const [inStock, setInStock]=useState(false);

		const delayedSearch =useDebounce(search,2000);
  
  		useEffect(()=> {
    		const transformed =transformProducts(products);
   			 	setCategories(transformed);

  		},[]);

  		const handleSearchChange= (event) =>{
    		setSearch(event.target.value);
    
  		};
  		const handleCheckInStockChange =(event)=>{

    		setInStock(event.target.checked);
		};

 		// const filteredCategories = filter(categories, search, inStock);
		// delayed search ,unrealatedstate?
		  const filteredCategories = useMemo(() => {
			return filter(categories, delayedSearch, inStock);
		}, [categories, delayedSearch, inStock]);
 
	//if we have 2 states which is one is derived state so we need  not set state as usestate instead produced it and use it

	// TODO: setup state to maintain products list, default list should be empty or null
	// transform original product list and set it as state in useEffect hook
	// const [] = useState([]);

	return (
		<div className="filterable-product-table">
				<SearchBar search={search} inStock={inStock} handleSearchChange={handleSearchChange} handleCheckInStockChange={handleCheckInStockChange} />

				<ProductTable filteredProducts= {filteredCategories} />
		</div>
	);
}

// we use useMemo we dont want to render the filter component whichis already a right value if we dont need to rerender when any otherstate changes or props changes.




//visualize the strucure
//state and filter