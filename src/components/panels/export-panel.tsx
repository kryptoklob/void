import { MdOutlineFeed, MdOutlineImage, MdPhotoFilter } from 'react-icons/md'
import { useCanvasRef } from '../editor-canvas'
import { exportPdf, exportPng, exportSvg } from '../../export'
import { useModule } from '../../contexts/module'
import { useScene } from '../../contexts/scene'

export let ExportPanel = () => {
  let scene = useScene()
  let module = useModule()
  let canvasRef = useCanvasRef()
  return (
    <div className="p-5 space-y-1">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold mb-3">Export</h2>
      </div>
      <div className="flex space-x-2 -mr-1.5">
        <button
          className={`
            flex-1 flex w-7 h-7 items-center justify-center space-x-1 rounded
            text-gray-400 border border-gray-200 hover:bg-black hover:text-white hover:border-transparent
          `}
          onClick={() => {
            let canvas = canvasRef.current
            if (canvas) exportPng(canvas)
          }}
        >
          <MdOutlineImage className="text-base" /> <span>PNG</span>
        </button>
        <button
          className={`
            flex-1 flex w-7 h-7 items-center justify-center space-x-1 rounded
            text-gray-400 border border-gray-200 hover:bg-black hover:text-white hover:border-transparent
          `}
          onClick={() => {
            exportSvg(scene, module)
          }}
        >
          <MdPhotoFilter className="text-base" /> <span>SVG</span>
        </button>
        <button
          className={`
            flex-1 flex w-7 h-7 items-center justify-center space-x-1 rounded
            text-gray-400 border border-gray-200 hover:bg-black hover:text-white hover:border-transparent
          `}
          onClick={() => {
            exportPdf(scene, module)
          }}
        >
          <MdOutlineFeed className="text-base" /> <span>PDF</span>
        </button>
      </div>
    </div>
  )
}