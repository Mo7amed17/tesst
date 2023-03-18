import React from 'react'
import Layout from '../../Layout'
import ConventionalFireFightingForm from './form'

const ConventionalFireFighting = () => {
  return (
    <Layout modalTitle='Add Conventional Fire Fighting' ModalComponent={<ConventionalFireFightingForm />}/>
  )
}

export default ConventionalFireFighting