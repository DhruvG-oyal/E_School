import React from 'react'

import NavbarA from '../../components/Navbars/NavbarA'

import Content from './Content'
import ContentFormP from '../../components/PersonalCard/ContentFormP'
const CreatecontentP = () => {
  return (
    <div>
    <NavbarA/>
    <div className='m-10'>
        <div className='text-[24px] text-white'>Guidlelines to create a Course</div>
        <div className='ml-4 mt-2'>
           <li>Each course contain some pages , pre-define the no of pages in the given box</li>
           <li>Once entered the number of pages do not change it while creating content</li>
           <li>Each page has a Main-title named as Page-Title indicating the topic covered in that page</li>
           <li>You can add any number of sub-titles,description,image to a page</li>
           <li>Keep in mind a subtitle has only one discription and 1 image mapped accordingly</li>
           <li>For a given subtilte add description and image only to its indexed subtitile</li>
           <li>You can add multiple points in a description of a subtitle separated by <b className='text-[20px] text-white p-1 bg-[#cdeaa6]'>@#</b></li>
           <li>You can add multiple Images in a SubTitle separated by <b className='text-[20px] text-white p-1 bg-[#cdeaa6]'>!#</b></li>
           <li>You can preview how a page looks at bottom </li>
        </div>
    </div>
    <div className='m-8'>
        <ContentFormP/>
    </div>

    </div>
  )
}

export default CreatecontentP