import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Components/Pages/Login';
import Dashboard from './Components/Pages/Dashboard';
import Layout from './Components/Common/Layout';
import Viewuser from './Components/Pages/User/Viewuser';
import Contactenquiry from './Components/Pages/Enquirys/Contactenquiry'
import Newsletter from './Components/Pages/Enquirys/Newsletter';
import Addcolor from './Components/Pages/colors/Addcolor';
import Viewcolor from './Components/Pages/colors/Viewcolor';
import Addmaterials from './Components/Pages/Materials/Addmaterials';
import Viewmaterials from './Components/Pages/Materials/Viewmaterials';
import Addcategory from './Components/Pages/Parent Category/Addcategory';
import Viewcategory from './Components/Pages/Parent Category/Viewcategory';
import Addsubcategory from './Components/Pages/Sub Category/Addsubcategory';
import Viewsubcategory from './Components/Pages/Sub Category/Viewsubcategory';
import Addsubsubcategory from './Components/Pages/Sub sub category/Addsubsubcategory';
import Viewsubsubcategory from './Components/Pages/Sub sub category/Viewsubsubcategory';
import Addproducts from './Components/Pages/Products/Addproducts';
import Viewproducts from './Components/Pages/Products/Viewproducts';
import Addwhycooseus from './Components/Pages/Why Choose Us/Addwhycooseus';
import Viewwhycooseus from './Components/Pages/Why Choose Us/Viewwhycooseus';
import Orders from './Components/Pages/Order/Orders';
import Addslider from './Components/Pages/Sliders/Addslider';
import Viewslider from './Components/Pages/Sliders/Viewslider';
import Addcountry from './Components/Pages/Country/Addcountry';
import Viewcountry from './Components/Pages/Country/Viewcountry';
import Addtestimonial from './Components/Pages/Testimonial/Addtestimonial';
import Viewtestimonial from './Components/Pages/Testimonial/Viewtestimonial';
import Addfaqs from './Components/Pages/Faqs/Addfaqs';
import Viewfaqs from './Components/Pages/Faqs/Viewfaqs';
import ForgotPassword from './Components/Pages/ForgotPassword';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes path="/">
      <Route index element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route element={<Layout />}>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path='user'>
          <Route path="view" element={<Viewuser />} />
        </Route>
        <Route path='enquiry'>
          <Route path="contact-enquiry" element={<Contactenquiry />} />
          <Route path="newsletter" element={<Newsletter />} />
        </Route>
        <Route path='colors'>
          <Route path="add" element={<Addcolor />} />
          <Route path="view" element={<Viewcolor />} />
        </Route>
        <Route path='materials'>
          <Route path="add" element={<Addmaterials />} />
          <Route path="view" element={<Viewmaterials />} />
        </Route>
        <Route path='parent-category'>
          <Route path="add" element={<Addcategory />} />
          <Route path="view" element={<Viewcategory />} />
        </Route>
        <Route path='sub-category'>
          <Route path="add" element={<Addsubcategory />} />
          <Route path="view" element={<Viewsubcategory />} />
        </Route>
        <Route path='sub-sub-category'>
          <Route path="add" element={<Addsubsubcategory />} />
          <Route path="view" element={<Viewsubsubcategory />} />
        </Route>
        <Route path='products'>
          <Route path="add" element={<Addproducts />} />
          <Route path="view" element={<Viewproducts />} />
        </Route>
        <Route path='why-choose-us'>
          <Route path="add" element={<Addwhycooseus />} />
          <Route path="view" element={<Viewwhycooseus />} />
        </Route>
        {/* Single Route */}
        <Route path="orders" element={<Orders />} />

        <Route path='sliders'>
          <Route path="add" element={<Addslider />} />
          <Route path="view" element={<Viewslider />} />
        </Route>
        <Route path='country'>
          <Route path="add" element={<Addcountry />} />
          <Route path="view" element={<Viewcountry />} />
        </Route>
        <Route path='testimonial'>
          <Route path="add" element={<Addtestimonial />} />
          <Route path="view" element={<Viewtestimonial />} />
        </Route>
        <Route path='faqs'>
          <Route path="add" element={<Addfaqs />} />
          <Route path="view" element={<Viewfaqs />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
