import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const OffshoreCenter = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
            <h1>
              Offshore Development Centre
            </h1>
            <p className="body-text text-lg mb-12">
              Increase innovation with a captive ODC
            </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-4" asChild>
                <Link to="/contact">BUILD YOUR ODC</Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-12 flex items-center justify-center">
              <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-medium">ODC Development Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🏢</span>
              </div>
              <h3 className="h6 mb-2">Own dedicated space</h3>
              <p className="caption">Your own office space in Bangalore</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">⚡</span>
              </div>
              <h3 className="h6 mb-2">Elite technologies</h3>
              <p className="caption">Latest tools and cutting-edge tech stack</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">🔒</span>
              </div>
              <h3 className="h6 mb-2">Bulletproof security</h3>
              <p className="caption">Enterprise-grade security and compliance</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🚀</span>
              </div>
              <h3 className="h6 mb-2">High-speed work</h3>
              <p className="caption">Optimized for maximum productivity</p>
            </Card>
          </div>
        </div>
      </section>

      {/* More goodbye to the corporate overload */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2>
                More goodbye to the corporate overload and hello to business growth
              </h2>
              <p className="body-text text-lg mb-8">
                Focus on innovation and growth while we handle all the operational complexities 
                of running an offshore development center.
              </p>
            </div>
            <div className="bg-yellow-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">Business Growth Chart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You're in good company */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">
              You're in good company
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">0M</div>
              <p className="text-xl font-semibold mb-2">Setup cost</p>
              <p className="text-muted-foreground">Zero upfront investment required</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">25K</div>
              <p className="text-xl font-semibold mb-2">Sq ft space</p>
              <p className="text-muted-foreground">Premium office facilities</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-turquoise mb-4">132</div>
              <p className="text-xl font-semibold mb-2">ODCs delivered</p>
              <p className="text-muted-foreground">Proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* A quiet place in a buzzing city */}
      <section className="py-16 bg-turquoise-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-background rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-turquoise rounded-lg flex items-center justify-center">
                <span className="text-turquoise-foreground text-lg font-semibold">Bangalore Office Space</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-6">
                A quiet place in a buzzing city
              </h2>
              <p className="text-lg text-turquoise-foreground/80 mb-8">
                Located in the heart of India's Silicon Valley, your ODC benefits from the vibrant 
                tech ecosystem while providing a focused environment for your team.
              </p>
              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/about">EXPLORE LOCATION</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powering your development operations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powering your development operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise-foreground text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We build your centre</h3>
              <p className="text-muted-foreground">
                Complete setup including infrastructure, technology, and operational frameworks
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-foreground text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We run your operations</h3>
              <p className="text-muted-foreground">
                Day-to-day management including HR, facilities, compliance, and administration
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-foreground text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">We scale as needed</h3>
              <p className="text-muted-foreground">
                Flexible scaling options to match your business growth and project requirements
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Bring new ideas to life */}
      <section className="py-16 bg-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise-foreground mb-6">
                Bring new ideas to life in an offshore R&D centre
              </h2>
              <p className="text-lg text-turquoise-foreground/80 mb-8">
                Your dedicated innovation hub in Bangalore, designed to accelerate product development 
                and drive technological breakthroughs.
              </p>
              <Button className="bg-panel-medium text-background hover:bg-panel-medium/90" asChild>
                <Link to="/contact">START INNOVATING</Link>
              </Button>
            </div>
            <div className="bg-turquoise-light rounded-lg p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground text-lg font-semibold">R&D Innovation Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default OffshoreCenter;