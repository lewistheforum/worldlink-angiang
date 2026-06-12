'use client';

import React, { useState } from 'react';
import { Eye, X, FileText } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import { documentsData as documents } from "@/data/document-gallery-data";
import { DOCUMENT_GALLERY_CONSTANTS } from "@/constants/document-gallery-constants";

export default function DocumentGallerySection() {
  const [selectedDoc, setSelectedDoc] = useState<{id: number, title: string, src: string} | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {DOCUMENT_GALLERY_CONSTANTS.TITLE}
          </h2>
          <p className="text-gray-600 text-lg">
            {DOCUMENT_GALLERY_CONSTANTS.DESCRIPTION}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="group flex flex-col items-center justify-center p-8 cursor-pointer rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500"
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors leading-snug">
                {doc.title}
              </h3>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-1 group-hover:text-blue-500 transition-colors font-medium bg-gray-50 px-3 py-1.5 rounded-full">
                <Eye size={16} /> {DOCUMENT_GALLERY_CONSTANTS.VIEW_DETAILS}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Modal */}
      <Dialog.Root open={!!selectedDoc} onOpenChange={(open) => !open && setSelectedDoc(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] p-4 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200">
            {selectedDoc && (
              <div className="relative flex flex-col items-center w-full">
                <div className="w-full flex justify-between items-center mb-4">
                  <Dialog.Title className="text-white text-xl font-bold tracking-wide">
                    {selectedDoc.title}
                  </Dialog.Title>
                  <Dialog.Close className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none">
                    <X className="h-6 w-6" />
                    <span className="sr-only">{DOCUMENT_GALLERY_CONSTANTS.CLOSE}</span>
                  </Dialog.Close>
                </div>
                
                <div className="relative w-full h-[80vh] flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src={`${selectedDoc.src}#toolbar=0`}
                    title={selectedDoc.title}
                    className="w-full h-full border-none"
                  />
                </div>
                
                {/* Adding Description for accessibility requirement in Radix */}
                <Dialog.Description className="sr-only">
                  {DOCUMENT_GALLERY_CONSTANTS.FULL_PREVIEW} {selectedDoc.title}
                </Dialog.Description>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
