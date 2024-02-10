import React, { useState, useEffect, useRef } from 'react'
import styles from './Header.module.scss'

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

	// const handleChange = (event: any, index: number) => {
	// 	setCheckedBoxes({...checkedboxes, [event?.target.name]: event?.target.checked})
	// 	const size = event.target.value;
	// 	if (checkedboxes[index]?.event?.target?.checked) {
	// 	  setSelectedSizes([...selectedSizes, size] as any); // Add size to selectedSizes
	// 	} else {
	// 	  setSelectedSizes(selectedSizes.filter((s) => s !== size)); // Remove size from selectedSizes
	// 	}
	// 	console.log(size);
	//   }
	//   const filteredProducts = selectedSizes.length > 0
	// 	? products?.filter((product: any) => selectedSizes.includes(product.size))
	// 	: products;

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
    // <header className={styles.header} data-type={themeColor}>
	// 			<div className={styles.header_container}>
	// 				<div className={styles.header_logoContainer}>
	// 					<div>
	// 						<Link href="/">
	// 							<Logo type={themeColor} />
	// 						</Link>
	// 					</div>
	// 					<ThemeToggler />
	// 				</div>

	// 				<NavButton />

	// 				<nav>
	// 					<div ref={dropdownRef2} className={styles.nav}>
	// 						<div data-type={themeColor} className={styles.circle}>
	// 							<div className={styles.icon}>
	// 								<Image
	// 									src={`/svgs/search-${themeColor}.svg`}
	// 									alt="icon"
	// 									fill
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div data-type={themeColor} className={styles.circle}>
	// 							<div className={styles.icon}>
	// 								<Image
	// 									src={`/svgs/bell-${themeColor}.svg`}
	// 									alt="icon"
	// 									fill
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div
	// 							onClick={toggleDropdownMob}
	// 							data-type={themeColor}
	// 							className={styles.circle}
	// 						>
	// 							<div className={styles.icon}>
	// 								<Image
	// 									alt="icon"
	// 									fill
	// 									src={`/svgs/User-${themeColor}.svg`}
	// 								/>
	// 							</div>
	// 							{open && (
	// 								<div className={styles.dropdownMenu}>
	// 									<Dropdown />
	// 								</div>
	// 							)}
	// 						</div>
	// 					</div>

	// 					<Link href="/cart">
	// 						<div data-type={themeColor} className={styles.cart_container}>
	// 							<div className={styles.cart}>
	// 								<div className={styles.cart_icon}>
	// 									<Image
	// 										alt="cart"
	// 										src={`/svgs/cart-${themeColor}.svg`}
	// 										fill
	// 									/>
	// 								</div>
	// 								<p
	// 									data-type={themeColor}
	// 									className={styles.cart_container_text}
	// 								>
	// 									₦{cartDetails.cartAmount} (
	// 									{cartDetails.cartQuantity})
	// 								</p>
	// 							</div>
	// 						</div>
	// 					</Link>
	// 				</nav>
	// 			</div>

	// 			<div data-type={themeColor} className={styles.mob_nav_container}>
	// 				<div className={styles.mob_nav}>
	// 					<div className={styles.mob_nav_header}>
	// 						<div className={styles.mob_logo}>
	// 							{navbar ? (
	// 								<div
	// 									onClick={() => setNavbar(!navbar)}
	// 									className={styles.close_icon}
	// 								>
	// 									<Image
	// 										src={`/svgs/plus-${themeColor}.svg`}
	// 										alt=""
	// 										fill
	// 									/>
	// 								</div>
	// 							) : (
	// 								<div
	// 									onClick={() => setNavbar(!navbar)}
	// 									className={styles.hamburger}
	// 								>
	// 									<Image
	// 										src={`/svgs/menu-${themeColor}.svg`}
	// 										alt=""
	// 										fill
	// 									/>
	// 								</div>
	// 							)}

	// 							<div className={styles.logo_container_sm}>
	// 								<Link href="/">
	// 									<Logo type={themeColor} />
	// 								</Link>
	// 							</div>
	// 						</div>

	// 						<div ref={dropdownRef} className={styles.mob_nav_items}>
	// 							<div
	// 								data-theme={themeColor}
	// 								className={styles.mob_nav_item}
	// 							>
	// 								<div className={styles.nav_item_icon}>
	// 									<Image
	// 										alt=""
	// 										fill
	// 										src={`/svgs/search-${themeColor}.svg`}
	// 									/>
	// 								</div>
	// 							</div>
	// 							<div
	// 								data-theme={themeColor}
	// 								onClick={toggleDropdown}
	// 								className={styles.mob_nav_item}
	// 							>
	// 								<div className={styles.nav_item_icon}>
	// 									<Image
	// 										alt=""
	// 										fill
	// 										src={`/svgs/User-${themeColor}.svg`}
	// 									/>
	// 								</div>
	// 								{isOpen && (
	// 									<div className={styles.dropdown}>
	// 										<Dropdown />
	// 									</div>
	// 								)}
	// 							</div>
	// 							<Link href="/cart">
	// 								<div
	// 									data-theme={themeColor}
	// 									className={styles.mob_nav_item}
	// 								>
	// 									<div className={styles.nav_item_icon}>
	// 										<Image
	// 											alt=""
	// 											fill
	// 											src={`/svgs/cart-${themeColor}.svg`}
	// 										/>
	// 									</div>
	// 								</div>
	// 							</Link>
	// 						</div>
	// 					</div>

	// 					<div data-activenav={navbar} className={styles.mob_nav_body}>
	// 						<div data-open={navbar} className={styles.nav_buttons}>
	// 							<NavButton />
	// 						</div>
	// 						<div data-open={navbar} className={styles.theme_toggler}>
	// 							<ThemeToggler />
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// </header>
	<></>
  )
}

export default Header