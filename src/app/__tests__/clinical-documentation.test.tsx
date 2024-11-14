import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ClinicalDocumentation from '../clinical-documentation/page'

// Mock the Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('ClinicalDocumentation', () => {
  it('renders the heading', () => {
    render(<ClinicalDocumentation />)
    const heading = screen.getByRole('heading', { name: /Clinical Documentation/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<ClinicalDocumentation />)
    const welcomeMessage = screen.getByText(/Welcome to the Clinical Documentation section/i)
    expect(welcomeMessage).toBeInTheDocument()
  })

  it('renders all four documentation sections', () => {
    render(<ClinicalDocumentation />)
    const sections = [
      'Patient Assessment Forms',
      'Treatment Plans',
      'Progress Notes',
      'Discharge Summaries'
    ]
    sections.forEach(section => {
      const sectionHeading = screen.getByRole('heading', { name: new RegExp(section, 'i') })
      expect(sectionHeading).toBeInTheDocument()
    })
  })

  it('renders links for each section', () => {
    render(<ClinicalDocumentation />)
    const links = [
      'View forms',
      'Manage plans',
      'Add notes',
      'Create summary'
    ]
    links.forEach(link => {
      const linkElement = screen.getByRole('link', { name: new RegExp(link, 'i') })
      expect(linkElement).toBeInTheDocument()
    })
  })

  it('renders a back to home link', () => {
    render(<ClinicalDocumentation />)
    const backToHomeLink = screen.getByRole('link', { name: /Back to Home/i })
    expect(backToHomeLink).toBeInTheDocument()
    expect(backToHomeLink).toHaveAttribute('href', '/')
  })
})