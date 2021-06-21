import React from "react"

import CatalogItem from "./vipComponents/CatalogItem";
import { Asa1970, Datsu1963, Eko1967, En1963, En1969, Izumi1975, Kan1965, Kanzan1964, KanzanScreen1969, Kanzan_shikkin1964, Ki1963, Ki1995, Ki_shikkin1964, Kumomushin1967, Miraiken1949, Monoui1963, Myo1964, Nin1975, Ryu1965, Shizuka1969, So1954, Sojo1969, Usobuku1963, Usobuku_shikkin1963 } from '../../data/ImageConstants';

export default function Documentary() {
    return (
        <>
            <div style={header}>
                <span style={headlinestyle}>Catalog</span>
            </div>
            <CatalogItem image={So1954}/>
            <CatalogItem image={Miraiken1949}/>
            <CatalogItem image={En1963}/>
            <CatalogItem image={Ki1963}/>
            <CatalogItem image={Datsu1963}/>
            <CatalogItem image={Usobuku1963}/>
            <CatalogItem image={Usobuku_shikkin1963}/>
            <CatalogItem image={Monoui1963}/>
            <CatalogItem image={Kanzan1964}/>
            <CatalogItem image={Kanzan_shikkin1964}/>
            <CatalogItem image={Myo1964}/>
            <CatalogItem image={Ki_shikkin1964}/>
            <CatalogItem image={Kan1965}/>
            <CatalogItem image={Ryu1965}/>
            <CatalogItem image={Eko1967}/>
            <CatalogItem image={Kumomushin1967}/>
            <CatalogItem image={KanzanScreen1969}/>
            <CatalogItem image={Shizuka1969}/>
            <CatalogItem image={En1969}/>
            <CatalogItem image={Sojo1969}/>
            <CatalogItem image={Asa1970}/>
            <CatalogItem image={Nin1975}/>
            <CatalogItem image={Izumi1975}/>
            <CatalogItem image={Ki1995}/>
        </>
    );
}


const headlinestyle = {
    fontFamily: 'Cormorant, serif',
    fontSize: '2rem',
    letterSpacing: '0'
}

const header = {
    margin: '40px 0',
    textAlign: 'center'
}

