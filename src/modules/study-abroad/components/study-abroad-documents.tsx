"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn, FileText, Eye } from "lucide-react";
import { documentsData as documents } from "@/data/document-gallery-data";
import { STUDY_ABROAD_CONSTANTS } from "@/constants/study-abroad-constants";

export default function StudyAbroadDocuments() {
  const [selectedDoc, setSelectedDoc] = useState<{id: number, title: string, src: string} | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center text-center mb-16">
          <div className="max-w-2xl mx-auto">

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              {STUDY_ABROAD_CONSTANTS.DOCUMENTS.TITLE_PART_1}<br />{STUDY_ABROAD_CONSTANTS.DOCUMENTS.TITLE_PART_2}
            </motion.h2>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, idx) => (
            <motion.div 
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center justify-center p-8 cursor-pointer rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-palette-1"
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="w-16 h-16 bg-palette-1/10 text-palette-1 rounded-full flex items-center justify-center mb-6 group-hover:bg-palette-1 group-hover:text-white transition-colors duration-300 shadow-sm">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-palette-1 transition-colors leading-snug">
                {doc.title}
              </h3>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-1 group-hover:text-palette-1 transition-colors font-medium bg-gray-50 px-3 py-1.5 rounded-full">
                <Eye size={16} /> {STUDY_ABROAD_CONSTANTS.DOCUMENTS.VIEW_DETAILS}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog.Root open={!!selectedDoc} onOpenChange={(open) => !open && setSelectedDoc(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] animate-in fade-in duration-300" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-5xl h-[90vh] flex flex-col p-4 outline-none">
            
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-white text-xl font-bold">
                {selectedDoc?.title}
              </Dialog.Title>
              <Dialog.Close className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none hover:rotate-90 duration-300">
                <X size={24} />
              </Dialog.Close>
            </div>
            
            <div className="relative flex-1 w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              {selectedDoc && (
                <iframe
                  src={`${selectedDoc.src}#toolbar=0`}
                  title={selectedDoc.title}
                  className="w-full h-full border-none animate-in zoom-in-95 duration-300"
                />
              )}
            </div>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-palette-2/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
