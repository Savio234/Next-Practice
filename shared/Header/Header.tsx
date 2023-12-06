import React, { useState, useEffect, useRef } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [dropDown, setDropDown] = useState<boolean>(false);
	const ref = useRef<any>(null);
	const handleNavClick = (id: string) => {
		// scrollTo({ id });
		setCollapsed(true);
	};

	const toggling = (event: React.MouseEvent) => {
		setDropDown(!dropDown);
		event.stopPropagation();
	};

	// useEffect(() => {
	// 	const element = ref.current;
	// 	const navList =
	// 		element?.children[0].children[1].children[0].children[0].childNodes;
	// 	if (typeof document !== "undefined") {
	// 		const sections = document.querySelectorAll("section");
	// 		const navLi = document.querySelectorAll("li");
	// 		window.onscroll = () => {
	// 			let current: any = "";

	// 			sections.forEach(section => {
	// 				const sectionTop = section.offsetTop;
	// 				if (scrollY >= sectionTop - 150) {
	// 					current = section.getAttribute("id");
	// 				}
	// 			});

	// 			navList?.forEach((li: any) => {
	// 				// console.log(current)
	// 				// if (scrollY == 0) {
	// 				//   if (li.classList.contains('home')) {
	// 				//     li.classList.add('active-nav')
	// 				//   }
	// 				// }else{

	// 				// }
	// 				li.classList.remove("active-nav");
	// 				if (li.classList.contains(current)) {
	// 					li.classList.add("active-nav");
	// 				}
	// 			});
	// 		};
	// 		// console.log(navList)
	// 	}
	// }, []);

	useEffect(() => {
		const handleClickOutside = () => {
			setDropDown(false);
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
  return (
    <div>
		{/* <div
						onClick={() => setCollapsed(!collapsed)}
						className={
							styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
						}
					>
						<span className={styles.header_hamburgerBar}></span>
						<span className={styles.header_hamburgerBar}></span>
					</div>
					
					<div
						onClick={() => setCollapsed(!collapsed)}
						className={
							styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
						}
					>
						<span className={styles.header_hamburgerBar}></span>
						<span className={styles.header_hamburgerBar}></span>
					</div> */}
	</div>
  )
}

export default Header