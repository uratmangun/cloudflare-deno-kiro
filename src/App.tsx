import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Heart, Github, Globe, Copy, ExternalLink } from 'lucide-react'

import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'

function App() {
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const callDenoFunction = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Get the Deno Deploy URL from environment variable
      const denoApiUrl = import.meta.env.VITE_DENO_API_URL || 'https://cloudflare-deno-kiro.deno.dev'
      
      // Try Deno server first (local development), fallback to production endpoint
      const endpoints = [
        'http://localhost:8000/api/hello', // Local Deno server
        `${denoApiUrl}/api/hello`, // Production Deno Deploy endpoint
        '/api/hello' // Fallback endpoint
      ]
      
      let response
      let lastError
      
      for (const endpoint of endpoints) {
        try {
          response = await fetch(endpoint)
          if (response.ok) break
        } catch (err) {
          lastError = err
          continue
        }
      }
      
      if (!response || !response.ok) {
        throw lastError || new Error(`HTTP error! status: ${response?.status || 'Unknown'}`)
      }
      
      const data = await response.json()
      setApiResponse(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setApiResponse(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      
      <ThemeToggle />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 text-gray-900 dark:text-gray-100">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React + shadcn/ui + Cloudflare Pages and Deno Deploy Ready
          </h1>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            A modern React application built with shadcn/ui components, ready for Cloudflare Pages and Deno Deploy.
            Beautiful, accessible, and customizable components built on top of Radix UI and Tailwind CSS.
          </p>
        </div>

        {/* GitHub CLI Instructions */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300">
                <Github className="h-5 w-5" />
                Create New Repository from Template
              </CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-400">
                Use GitHub CLI to quickly create a new project based on this template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 relative group">
                <code className="text-green-400 font-mono text-sm block">
                  gh repo create my-new-project --template uratmangun/cloudflare-deno-kiro --public --clone
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-slate-700"
                  onClick={() => {
                    navigator.clipboard.writeText('gh repo create my-new-project --template uratmangun/cloudflare-deno-kiro --public --clone')
                  }}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Replace <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">my-new-project</code> with your desired repository name.</p>
                <p>This command will:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Create a new repository from this template</li>
                  <li>Set it as public (use <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">--private</code> for private repos)</li>
                  <li>Clone the repository to your local machine</li>
                </ul>
              </div>
              <div className="flex items-center justify-center pt-4">
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/uratmangun/cloudflare-deno-kiro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Template Repository
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                shadcn/ui
              </CardTitle>
              <CardDescription>
                Beautiful and accessible React components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built on top of Radix UI and Tailwind CSS. Copy, paste, and customize to your heart's content.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Cloudflare & Deno Ready
              </CardTitle>
              <CardDescription>
                Optimized for Cloudflare Pages and Deno Deploy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-configured for seamless deployment to Cloudflare Pages and Deno Deploy with optimized build settings.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Deploy Now
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                Open Source
              </CardTitle>
              <CardDescription>
                Built with modern open source tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                React, Vite, TypeScript, Tailwind CSS, and Radix UI - all open source and battle-tested.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Source
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block max-w-2xl">
            <CardHeader>
              <CardTitle>Serverless Function API</CardTitle>
              <CardDescription>
                Test the serverless function integration
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <Button 
                  onClick={callDenoFunction}
                  disabled={loading}
                  size="lg"
                >
                  {loading ? 'Calling API...' : 'Call Serverless Function'}
                </Button>
              </div>
              
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                  <p className="text-red-700 dark:text-red-300 font-medium">Error:</p>
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}
              
              {apiResponse && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-green-700 dark:text-green-300 font-medium mb-3">API Response:</p>
                  <div className="text-left space-y-2">
                    <p><span className="font-medium">Message:</span> {apiResponse.message}</p>
                    <p><span className="font-medium">Timestamp:</span> {new Date(apiResponse.timestamp).toLocaleString()}</p>
                    <p><span className="font-medium">Random Number:</span> {apiResponse.randomNumber}</p>
                    <p><span className="font-medium">Status:</span> <span className="text-green-600 dark:text-green-400">{apiResponse.status}</span></p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
