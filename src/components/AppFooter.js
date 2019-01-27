import React from 'react'

export default function AppFooter() {
    const now = new Date();

    const year = now.getFullYear()
    return (
        <div>
          <footer className="page-footer font-small teal pt-4">
            <div className="footer-copyright text-center py-3">
                © {year} - All Rights Reserved - Itay Pinhas
            </div>
        </footer>
      </div>
    )
}
