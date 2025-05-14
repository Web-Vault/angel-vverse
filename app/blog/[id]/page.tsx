"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/app/data/blog";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a237e10_1px,transparent_1px)] bg-[length:40px_40px]" />
          <div className="relative z-10 p-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                {post.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Share This Post</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Facebook
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Related Posts</h3>
              <div className="space-y-4">
                {blogPosts
                  .filter((p) => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-500">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 