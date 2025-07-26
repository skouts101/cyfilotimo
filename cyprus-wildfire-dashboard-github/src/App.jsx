import React, { useState, useEffect } from 'react'
import { Search, Filter, ExternalLink, Heart, Building, Users, DollarSign, X, Tag } from 'lucide-react'
import companiesData from './data/companies.json'
import './App.css'

const App = () => {
  const [companies] = useState(companiesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedHelpType, setSelectedHelpType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [currentDateTime] = useState(new Date())

  // Get unique values for filters
  const companyTypes = [...new Set(companies.map(c => c.type))].sort()
  const helpTypes = [...new Set(companies.map(c => c.helpType))].sort()
  const statuses = [...new Set(companies.map(c => c.status))].sort()
  const allTags = [...new Set(companies.flatMap(c => c.tags || []))].sort()

  // Filter companies
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || company.type === selectedType
    const matchesHelpType = selectedHelpType === 'all' || company.helpType === selectedHelpType
    const matchesStatus = selectedStatus === 'all' || company.status === selectedStatus
    const matchesTag = selectedTag === 'all' || (company.tags && company.tags.includes(selectedTag))
    
    return matchesSearch && matchesType && matchesHelpType && matchesStatus && matchesTag
  })

  // Calculate statistics
  const totalCompanies = companies.length
  const activeCompanies = companies.filter(c => c.status === 'Active').length
  const totalFinancialAid = companies.reduce((sum, company) => {
    if (company.amount && company.amount.includes('€')) {
      const amount = company.amount.match(/€([\d,]+)/)?.[1]?.replace(/,/g, '')
      return sum + (parseInt(amount) || 0)
    }
    return sum
  }, 0)

  const formatDateTime = (date) => {
    return date.toLocaleString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', 
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '1.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ 
              backgroundColor: '#fef2f2', 
              padding: '0.5rem', 
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart style={{ width: '1.5rem', height: '1.5rem', color: '#dc2626' }} />
            </div>
            <div>
              <h1 style={{ 
                fontSize: '1.875rem', 
                fontWeight: '700', 
                color: '#111827', 
                margin: 0,
                lineHeight: '2.25rem'
              }}>
                Consolidated Cyprus Wildfire Support Resources
              </h1>
              <p style={{ 
                color: '#6b7280', 
                margin: '0.25rem 0 0 0', 
                fontSize: '1rem',
                fontWeight: '400'
              }}>
                Companies & Organizations Helping Wildfire Victims
              </p>
            </div>
          </div>
          <div style={{ 
            textAlign: 'right',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            <p style={{ margin: 0, fontWeight: '500' }}>Last Updated</p>
            <p style={{ margin: '0.125rem 0 0 0', fontSize: '0.75rem' }}>
              {formatDateTime(currentDateTime)}
            </p>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Statistics Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '2rem' 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            padding: '1.5rem', 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#6b7280', 
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Total Organizations
                </p>
                <p style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: '700', 
                  color: '#111827', 
                  margin: '0.5rem 0',
                  lineHeight: '2.5rem'
                }}>
                  {totalCompanies}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                  Companies & organizations helping
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '0.75rem', 
                borderRadius: '0.5rem' 
              }}>
                <Building style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            padding: '1.5rem', 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#6b7280', 
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Active Support
                </p>
                <p style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: '700', 
                  color: '#059669', 
                  margin: '0.5rem 0',
                  lineHeight: '2.5rem'
                }}>
                  {activeCompanies}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                  Currently providing aid
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#d1fae5', 
                padding: '0.75rem', 
                borderRadius: '0.5rem' 
              }}>
                <Users style={{ width: '2rem', height: '2rem', color: '#059669' }} />
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            padding: '1.5rem', 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '500', 
                  color: '#6b7280', 
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  💰 Financial Aid
                </p>
                <p style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: '700', 
                  color: '#2563eb', 
                  margin: '0.5rem 0',
                  lineHeight: '2.5rem'
                }}>
                  €{(totalFinancialAid / 1000000).toFixed(2)}M
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                  Confirmed financial support
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#dbeafe', 
                padding: '0.75rem', 
                borderRadius: '0.5rem' 
              }}>
                <DollarSign style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div style={{ 
          backgroundColor: '#fef3c7', 
          border: '1px solid #f59e0b',
          borderRadius: '0.5rem', 
          padding: '1.5rem', 
          marginBottom: '2rem' 
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            color: '#92400e', 
            margin: '0 0 0.5rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
            Additional Resources
          </h3>
          <p style={{ color: '#92400e', margin: '0 0 1rem 0' }}>
            For more comprehensive help provider information:
          </p>
          <a 
            href="https://firesos.livenow.com.cy/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: '#92400e', 
              textDecoration: 'underline',
              fontWeight: '500',
              fontSize: '1rem'
            }}
          >
            <ExternalLink style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            FireSOS Cyprus - Comprehensive Help Providers Directory
          </a>
        </div>

        {/* Search and Filter */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          padding: '1.5rem', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e7eb',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem' 
          }}>
            <Filter style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} />
            <h2 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: '#111827', 
              margin: 0 
            }}>
              Search & Filter
            </h2>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem' 
          }}>
            {/* Search Field - Full Width Row */}
            <div style={{ position: 'relative' }}>
              <Search style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#9ca3af', 
                width: '1rem', 
                height: '1rem' 
              }} />
              <input
                type="text"
                placeholder="Search companies..."
                style={{
                  width: '100%',
                  paddingLeft: '2.5rem',
                  paddingRight: '0.75rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                  boxSizing: 'border-box'
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb'
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Filter Dropdowns - Grid Row */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '0.75rem' 
            }}>
              {[
                { value: selectedType, setter: setSelectedType, options: companyTypes, placeholder: 'All Types' },
                { value: selectedHelpType, setter: setSelectedHelpType, options: helpTypes, placeholder: 'All Help Types' },
                { value: selectedStatus, setter: setSelectedStatus, options: statuses, placeholder: 'All Statuses' },
                { value: selectedTag, setter: setSelectedTag, options: allTags, placeholder: 'All Tags' }
              ].map((filter, index) => (
                <select
                  key={index}
                  style={{
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    backgroundColor: 'white',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                    boxSizing: 'border-box'
                  }}
                  value={filter.value}
                  onChange={(e) => filter.setter(e.target.value)}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <option value="all">{filter.placeholder}</option>
                  {filter.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ))}
            </div>
          </div>
          
          {/* Popular Tags Quick Filter */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#6b7280', 
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Tag style={{ width: '1rem', height: '1rem' }} />
              Popular Categories:
            </div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem' 
            }}>
              {['Veterinary', 'Financial Aid', 'Accommodation', 'Emergency Supplies', 'Collection Point', 'Medical Care', 'Food Service', 'Animal Care'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? 'all' : tag)}
                  style={{
                    padding: '0.375rem 0.75rem',
                    border: selectedTag === tag ? '2px solid #3b82f6' : '1px solid #d1d5db',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    backgroundColor: selectedTag === tag ? '#eff6ff' : 'white',
                    color: selectedTag === tag ? '#1d4ed8' : '#6b7280',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: selectedTag === tag ? '600' : '400',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTag !== tag) {
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.borderColor = '#9ca3af';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTag !== tag) {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Companies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredCompanies.map((company) => (
            <div 
              key={company.id} 
              style={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #3b82f6',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                e.currentTarget.style.borderLeftColor = '#1d4ed8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                e.currentTarget.style.borderLeftColor = '#3b82f6'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  flexWrap: 'wrap', 
                  gap: '0.75rem' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600', 
                      color: '#111827', 
                      margin: 0 
                    }}>
                      {company.name}
                    </h3>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: company.status === 'Active' ? '#dcfce7' : company.status === 'Paused' ? '#fef3c7' : '#e5e7eb',
                      color: company.status === 'Active' ? '#166534' : company.status === 'Paused' ? '#92400e' : '#374151'
                    }}>
                      {company.status}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{company.date}</span>
                    <button
                      onClick={() => setSelectedCompany(company)}
                      style={{
                        padding: '0.5rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        backgroundColor: 'white',
                        color: '#374151',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f9fafb'
                        e.target.style.borderColor = '#9ca3af'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'white'
                        e.target.style.borderColor = '#d1d5db'
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <p style={{ 
                  color: '#6b7280', 
                  margin: 0, 
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {company.type}
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '1rem' 
                }}>
                  <div>
                    <span style={{ 
                      fontWeight: '500', 
                      color: '#374151', 
                      fontSize: '0.875rem' 
                    }}>
                      Type of Help
                    </span>
                    <p style={{ 
                      color: '#111827', 
                      margin: '0.125rem 0 0 0', 
                      fontSize: '0.875rem' 
                    }}>
                      {company.helpType}
                    </p>
                  </div>
                  
                  <div>
                    <span style={{ 
                      fontWeight: '500', 
                      color: '#374151', 
                      fontSize: '0.875rem' 
                    }}>
                      Support Amount
                    </span>
                    <p style={{ 
                      color: '#111827', 
                      margin: '0.125rem 0 0 0', 
                      fontSize: '0.875rem' 
                    }}>
                      {company.amount}
                    </p>
                  </div>
                  
                  <div>
                    <span style={{ 
                      fontWeight: '500', 
                      color: '#374151', 
                      fontSize: '0.875rem' 
                    }}>
                      Contact
                    </span>
                    <p style={{ 
                      color: '#111827', 
                      margin: '0.125rem 0 0 0', 
                      fontSize: '0.875rem' 
                    }}>
                      {company.contact}
                    </p>
                  </div>
                </div>
                
                <p style={{ 
                  color: '#374151', 
                  margin: 0, 
                  fontSize: '0.875rem', 
                  lineHeight: '1.5' 
                }}>
                  {company.details}
                </p>
                
                {company.tags && company.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {company.tags.slice(0, 5).map((tag, index) => (
                      <span 
                        key={index} 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.25rem 0.5rem',
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          borderRadius: '0.375rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {company.tags.length > 5 && (
                      <span style={{
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.375rem'
                      }}>
                        +{company.tags.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p style={{ color: '#6b7280', fontSize: '1.125rem', margin: 0 }}>
              No companies found matching your criteria.
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>

      {/* Company Detail Modal */}
      {selectedCompany && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            maxWidth: '42rem',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginBottom: '1.5rem' 
              }}>
                <div>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#111827', 
                    margin: 0 
                  }}>
                    {selectedCompany.name}
                  </h2>
                  <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>
                    {selectedCompany.type}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: selectedCompany.status === 'Active' ? '#dcfce7' : selectedCompany.status === 'Paused' ? '#fef3c7' : '#e5e7eb',
                    color: selectedCompany.status === 'Active' ? '#166534' : selectedCompany.status === 'Paused' ? '#92400e' : '#374151'
                  }}>
                    {selectedCompany.status}
                  </span>
                  <button
                    onClick={() => setSelectedCompany(null)}
                    style={{
                      padding: '0.5rem',
                      border: 'none',
                      borderRadius: '0.375rem',
                      backgroundColor: '#f3f4f6',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <X style={{ width: '1rem', height: '1rem', color: '#6b7280' }} />
                  </button>
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1.5rem', 
                marginBottom: '1.5rem' 
              }}>
                <div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0' 
                  }}>
                    Type of Help
                  </h3>
                  <p style={{ color: '#374151', margin: 0 }}>
                    {selectedCompany.helpType}
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0' 
                  }}>
                    Support Amount
                  </h3>
                  <p style={{ color: '#374151', margin: 0 }}>
                    {selectedCompany.amount}
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0' 
                  }}>
                    Contact Information
                  </h3>
                  <p style={{ color: '#374151', margin: 0 }}>
                    {selectedCompany.contact}
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0' 
                  }}>
                    Date
                  </h3>
                  <p style={{ color: '#374151', margin: 0 }}>
                    {selectedCompany.date}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0' 
                }}>
                  Details
                </h3>
                <p style={{ color: '#374151', lineHeight: '1.6', margin: 0 }}>
                  {selectedCompany.details}
                </p>
              </div>

              {selectedCompany.tags && selectedCompany.tags.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0' 
                  }}>
                    Tags
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedCompany.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          borderRadius: '0.375rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0' 
                }}>
                  Source
                </h3>
                <a 
                  href={selectedCompany.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#2563eb',
                    textDecoration: 'none',
                    wordBreak: 'break-all'
                  }}
                >
                  <ExternalLink style={{ 
                    width: '1rem', 
                    height: '1rem', 
                    marginRight: '0.5rem', 
                    flexShrink: 0 
                  }} />
                  View Original Source
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => setSelectedCompany(null)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'white', 
        borderTop: '1px solid #e5e7eb', 
        marginTop: '4rem',
        padding: '2rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>
              This database represents the most comprehensive collection of Cyprus company wildfire support initiatives.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 1rem 0' }}>
              Information compiled from multiple Greek and English language sources • Last updated July 26, 2025
            </p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>
              Made with Love ❤️, Human Spirit and Artificial Intelligence
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

