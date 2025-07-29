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
import { Heart, Github, Globe } from 'lucide-react'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'
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
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
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
