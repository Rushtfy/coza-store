import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import bannerOne from '../../assets/banner-01.jpg'
import bannerTwo from '../../assets/banner-02.jpg'
import bannerThree from '../../assets/banner-03.jpg'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productsSlice'
import Card from '../../components/card/Card'

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(8);

    const lastIndexItem = currentPage * itemPerPage;
    const firstIndexItem = lastIndexItem - itemPerPage;

    const products = useSelector((state) => state.products.products) || [];
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(getProductThunk());
    }, []);

    if (loading) return <p>Yüklənir...</p>
    if (error) return <p>Xəta baş verdi</p>

    const currentProducts = products.slice(firstIndexItem, lastIndexItem);

    let pages = [];

    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        pages.push(i);
    }

    return (
        <Layout>
            <div className={styles.sectionOne}>
                <div className={styles.containerOne}>
                    <span>Women Collection 2018</span>
                    <h2>NEW SEASON</h2>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.containerTwo}>
                    <img src={bannerOne} alt="banner" />
                    <img src={bannerTwo} alt="banner" />
                    <img src={bannerThree} alt="banner" />
                </div>
            </div>
            <div className={styles.sectionThree}>
                <h2 className={styles.title}>Product Overview</h2>
                <div className={styles.containerThree}>
                    {currentProducts && currentProducts.map(item => <Card item={item} />)}
                </div>
                <div className={styles.pageNums}>
                    {pages && pages.map(item => {
                        return <button style={currentPage == item ? { backgroundColor: "gray" } : { backgroundColor: "#717FE0" }} onClick={() => setCurrentPage(item)}>{item}</button>
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Home