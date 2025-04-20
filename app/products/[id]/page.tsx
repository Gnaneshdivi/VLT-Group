import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Find related products (same category)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container px-4 py-8 mx-auto">
      <Link href="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="flex justify-center items-center bg-white rounded-lg border p-4">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt={product.name}
            width={400}
            height={400}
            className="object-contain max-h-[400px]"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.category}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Segment</p>
              <p className="font-medium">{product.segment}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Sub Segment</p>
              <p className="font-medium">{product.sub_segment}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Packaging</p>
              <p className="font-medium">{product.packaging}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Volume/Weight</p>
              <p className="font-medium">
                {product.volume} {product.unit}
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <Link href="/contact">
              <Button className="w-full bg-[#F78C2C] hover:bg-[#F78C2C]/90">Contact for Inquiry</Button>
            </Link>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={relatedProduct.name}
                    width={200}
                    height={200}
                    className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="font-semibold">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-500">{relatedProduct.category}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedProduct.packaging}</span>
                      <span>
                        {relatedProduct.volume} {relatedProduct.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
